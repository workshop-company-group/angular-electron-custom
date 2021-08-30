
import { Injectable } from '@angular/core';

import { ipcRenderer, webFrame } from 'electron';
import * as remote from '@electron/remote';
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
    // eslint-disable-next-line max-len
    // eslint-disable-next-line @typescript-eslint/prefer-optional-chain, @typescript-eslint/no-unnecessary-condition
    return !!(window.process && window.process.type);
  }

  constructor() {
    // Conditional imports
    if (this.isElectron) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.webFrame = window.require('electron').webFrame;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.childProcess = window.require('child_process');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.fs = window.require('fs');
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      this.remote = window.require('@electron/remote');
    }
  }
}
