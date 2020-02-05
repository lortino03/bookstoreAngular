import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLivresComponent } from './detail-livres.component';

describe('DetailLivresComponent', () => {
  let component: DetailLivresComponent;
  let fixture: ComponentFixture<DetailLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
