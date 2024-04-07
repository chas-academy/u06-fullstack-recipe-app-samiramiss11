import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaverecipeComponent } from './saverecipe.component';

describe('SaverecipeComponent', () => {
  let component: SaverecipeComponent;
  let fixture: ComponentFixture<SaverecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaverecipeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SaverecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
