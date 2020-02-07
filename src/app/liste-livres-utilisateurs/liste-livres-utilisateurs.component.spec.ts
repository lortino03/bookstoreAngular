import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeLivresUtilisateursComponent } from './liste-livres-utilisateurs.component';

describe('ListeLivresUtilisateursComponent', () => {
  let component: ListeLivresUtilisateursComponent;
  let fixture: ComponentFixture<ListeLivresUtilisateursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeLivresUtilisateursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeLivresUtilisateursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
