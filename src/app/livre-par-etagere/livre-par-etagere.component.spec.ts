import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreParEtagereComponent } from './livre-par-etagere.component';

describe('LivreParEtagereComponent', () => {
  let component: LivreParEtagereComponent;
  let fixture: ComponentFixture<LivreParEtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivreParEtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivreParEtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
