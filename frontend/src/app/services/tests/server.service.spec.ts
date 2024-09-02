import { TestBed, inject } from '@angular/core/testing';

import { ServerService } from 'src/app/services/server.service';

describe('ServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServerService],
    });
  });

  it('should be created', inject([ServerService], (service: ServerService) => {
    expect(service).toBeTruthy();
  }));
});
