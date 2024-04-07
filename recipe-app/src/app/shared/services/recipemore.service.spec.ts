import { TestBed } from '@angular/core/testing';

import { RecipemoreService } from './recipemore.service';

describe('RecipemoreService', () => {
  let service: RecipemoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipemoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
