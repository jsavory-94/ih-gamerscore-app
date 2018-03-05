import { TestBed, inject } from '@angular/core/testing';

import { UserScoresService } from './user-scores.service';

describe('UserScoresService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserScoresService]
    });
  });

  it('should be created', inject([UserScoresService], (service: UserScoresService) => {
    expect(service).toBeTruthy();
  }));
});
