import { TestBed } from '@angular/core/testing';

import { DrinkService } from './drinks.Service';

describe('NameService', () => {
  let service: DrinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
