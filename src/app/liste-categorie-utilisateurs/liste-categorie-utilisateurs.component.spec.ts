import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCategorieUtilisateursComponent } from './liste-categorie-utilisateurs.component';

describe('ListeCategorieUtilisateursComponent', () => {
  let component: ListeCategorieUtilisateursComponent;
  let fixture: ComponentFixture<ListeCategorieUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCategorieUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCategorieUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
