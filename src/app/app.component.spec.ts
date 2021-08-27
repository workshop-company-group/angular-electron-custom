import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { ElectronService } from './core/services';

describe('AppComponent', () => {
  beforeEach(waitForAsync(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [ElectronService],
      imports: [RouterTestingModule, TranslateModule.forRoot()],
    }).compileComponents();
  }));

  it('should create the app', waitForAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
