import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEtagereComponent } from './liste-etagere.component';

describe('ListeEtagereComponent', () => {
  let component: ListeEtagereComponent;
  let fixture: ComponentFixture<ListeEtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeEtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
