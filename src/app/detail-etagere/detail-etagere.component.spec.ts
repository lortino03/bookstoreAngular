import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEtagereComponent } from './detail-etagere.component';

describe('DetailEtagereComponent', () => {
  let component: DetailEtagereComponent;
  let fixture: ComponentFixture<DetailEtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
