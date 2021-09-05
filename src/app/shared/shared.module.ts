import { NgModule } from '@angular/core';

import { TranslateModule } from '@ngx-translate/core';

import { PageNotFoundComponent } from './components/';

@NgModule({
  declarations: [
    PageNotFoundComponent,
  ],
  imports: [
    TranslateModule,
  ],
  exports: [
    TranslateModule,
  ],
})
export class SharedModule {}
