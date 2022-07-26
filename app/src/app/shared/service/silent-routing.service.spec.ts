import { TestBed } from '@angular/core/testing';

import { SilentRoutingService } from './silent-routing.service';

describe('SilentRoutingService', () => {
  let service: SilentRoutingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SilentRoutingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
