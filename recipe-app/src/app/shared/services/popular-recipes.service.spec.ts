import { TestBed } from '@angular/core/testing';

import { PopularRecipesService } from './popular-recipes.service';

describe('PopularRecipesService', () => {
  let service: PopularRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
