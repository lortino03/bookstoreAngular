import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreParCategorieComponent } from './livre-par-categorie.component';

describe('LivreParCategorieComponent', () => {
  let component: LivreParCategorieComponent;
  let fixture: ComponentFixture<LivreParCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreParCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
