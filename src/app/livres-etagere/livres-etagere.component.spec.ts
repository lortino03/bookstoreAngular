import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresEtagereComponent } from './livres-etagere.component';

describe('LivresEtagereComponent', () => {
  let component: LivresEtagereComponent;
  let fixture: ComponentFixture<LivresEtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresEtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresEtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
