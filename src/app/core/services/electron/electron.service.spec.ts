import { TestBed } from '@angular/core/testing';

import { ElectronService } from './electron.service';

describe('ElectronService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const service: ElectronService = TestBed.get(ElectronService);
    expect(service).toBeTruthy();
  });
});
