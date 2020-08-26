import { TestBed } from '@angular/core/testing';

import { RecoveredService } from './recovered.service';

describe('RecoveredService', () => {
  let service: RecoveredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoveredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
