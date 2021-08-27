import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {

  constructor(
    private readonly router: Router,
    private readonly logger: NGXLogger,
  ) { }

  public ngOnInit(): void {
    this.logger.log('HomeComponent INIT');
  }

}
