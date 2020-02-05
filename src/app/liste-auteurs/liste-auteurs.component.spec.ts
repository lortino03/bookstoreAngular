import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAuteursComponent } from './liste-auteurs.component';

describe('ListeAuteursComponent', () => {
  let component: ListeAuteursComponent;
  let fixture: ComponentFixture<ListeAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
