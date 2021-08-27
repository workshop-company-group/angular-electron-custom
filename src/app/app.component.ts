import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ElectronService } from './core/services';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    private readonly electronService: ElectronService,
    private readonly translate: TranslateService,
    private readonly logger: NGXLogger,
  ) {
    this.translate.setDefaultLang('en');
    this.logger.log('APP_CONFIG', APP_CONFIG);

    if (electronService.isElectron) {
      this.logger.log(process.env);
      this.logger.log('Run in electron');
      this.logger.log('Electron ipcRenderer', this.electronService.ipcRenderer);
      this.logger.log('NodeJS childProcess', this.electronService.childProcess);
    } else {
      this.logger.log('Run in browser');
    }
  }
}
