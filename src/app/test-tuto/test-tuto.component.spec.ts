import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTutoComponent } from './test-tuto.component';

describe('TestTutoComponent', () => {
  let component: TestTutoComponent;
  let fixture: ComponentFixture<TestTutoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestTutoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestTutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
