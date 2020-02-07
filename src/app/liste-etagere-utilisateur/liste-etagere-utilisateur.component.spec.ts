import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtagereUtilisateurComponent } from './liste-etagere-utilisateur.component';

describe('ListeEtagereUtilisateurComponent', () => {
  let component: ListeEtagereUtilisateurComponent;
  let fixture: ComponentFixture<ListeEtagereUtilisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEtagereUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtagereUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
