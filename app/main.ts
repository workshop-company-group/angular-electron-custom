import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as fs from 'fs';
import * as url from 'url';

// Initialize remote module
// eslint-disable-next-line -- disabling because of `require` imports
require('@electron/remote/main').initialize();

let win: BrowserWindow | undefined;
const args = process.argv.slice(1),
  serve = args.some(val => val === '--serve');

function createWindow(): BrowserWindow {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve,
      // false if you want to run e2e test with Spectron
      contextIsolation: false,
    },
  });


  if (serve) {
    win.webContents.openDevTools();
    // eslint-disable-next-line -- disabling because of `require` imports
    require('electron-reload')(__dirname, {
      // eslint-disable-next-line -- disabling because of `require` imports
      electron: require(path.join(__dirname, '/../node_modules/electron'))
    });
    void win.loadURL('http://localhost:4200');
  } else {
    // Path when running electron executable
    let pathIndex = './index.html';

    if (fs.existsSync(path.join(__dirname, '../dist/index.html'))) {
      // Path when running electron in local folder
      pathIndex = '../dist/index.html';
    }

    void win.loadURL(url.format({
      pathname: path.join(__dirname, pathIndex),
      protocol: 'file:',
      slashes: true,
    }));
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    app.quit();
  });

  return win;
}

try {
  app.disableHardwareAcceleration();
  app.commandLine.appendSwitch('js-flags', '--max-old-space-size=4096');
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  const WINDOW_CREATION_TIMEOUT = 400;
  app.on('ready', () => setTimeout(createWindow, WINDOW_CREATION_TIMEOUT));

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    app.quit();
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (!win) {
      createWindow();
    }
  });

} catch (e) {
  // Catch Error
  // throw e;
}
