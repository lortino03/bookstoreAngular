import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAuteursComponent } from './detail-auteurs.component';

describe('DetailAuteursComponent', () => {
  let component: DetailAuteursComponent;
  let fixture: ComponentFixture<DetailAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
