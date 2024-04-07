import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipefilterComponent } from './recipefilter.component';

describe('RecipefilterComponent', () => {
  let component: RecipefilterComponent;
  let fixture: ComponentFixture<RecipefilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipefilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecipefilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
