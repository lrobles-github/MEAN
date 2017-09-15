import { TestBed, inject } from '@angular/core/testing';

import { DojomailService } from './dojomail.service';

describe('DojomailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DojomailService]
    });
  });

  it('should be created', inject([DojomailService], (service: DojomailService) => {
    expect(service).toBeTruthy();
  }));
});
