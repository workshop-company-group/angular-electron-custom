import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageNotFoundComponent implements OnInit {
  constructor(
    private readonly logger: NGXLogger,
  ) {}

  public ngOnInit(): void {
    this.logger.log('PageNotFoundComponent INIT');
  }
}
