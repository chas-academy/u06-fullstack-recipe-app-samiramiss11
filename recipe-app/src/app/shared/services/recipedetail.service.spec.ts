import { TestBed } from '@angular/core/testing';

import { RecipedetailService } from './recipedetail.service';

describe('RecipedetailService', () => {
  let service: RecipedetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipedetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
