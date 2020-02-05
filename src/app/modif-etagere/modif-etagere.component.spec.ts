import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifEtagereComponent } from './modif-etagere.component';

describe('ModifEtagereComponent', () => {
  let component: ModifEtagereComponent;
  let fixture: ComponentFixture<ModifEtagereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifEtagereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifEtagereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
