import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreParAuteurComponent } from './livre-par-auteur.component';

describe('LivreParAuteurComponent', () => {
  let component: LivreParAuteurComponent;
  let fixture: ComponentFixture<LivreParAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreParAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreParAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
