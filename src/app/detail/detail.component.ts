import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailComponent implements OnInit {

  constructor(private readonly logger: NGXLogger) { }

  public ngOnInit(): void {
    this.logger.log('DetailComponent INIT');
  }

}
