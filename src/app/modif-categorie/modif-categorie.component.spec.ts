import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifCategorieComponent } from './modif-categorie.component';

describe('ModifCategorieComponent', () => {
  let component: ModifCategorieComponent;
  let fixture: ComponentFixture<ModifCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
