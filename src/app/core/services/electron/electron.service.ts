import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';

@Injectable({
  providedIn: 'root',
})
export class ElectronService {
  public ipcRenderer: typeof ipcRenderer;

  public webFrame: typeof webFrame;

  public remote: typeof remote;

  public childProcess: typeof childProcess;

  public fs: typeof fs;

  public get isElectron(): boolean {
    return !!(window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = ipcRenderer;
      this.webFrame = webFrame;
      this.remote = remote;
      this.childProcess = childProcess;
      this.fs = fs;
    }
  }
}
