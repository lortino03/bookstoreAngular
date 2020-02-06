import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresAuteurComponent } from './livres-auteur.component';

describe('LivresAuteurComponent', () => {
  let component: LivresAuteurComponent;
  let fixture: ComponentFixture<LivresAuteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresAuteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresAuteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
