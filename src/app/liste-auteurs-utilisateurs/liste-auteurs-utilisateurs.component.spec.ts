import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAuteursUtilisateursComponent } from './liste-auteurs-utilisateurs.component';

describe('ListeAuteursUtilisateursComponent', () => {
  let component: ListeAuteursUtilisateursComponent;
  let fixture: ComponentFixture<ListeAuteursUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAuteursUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAuteursUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
