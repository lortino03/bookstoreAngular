import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifAuteursComponent } from './modif-auteurs.component';

describe('ModifAuteursComponent', () => {
  let component: ModifAuteursComponent;
  let fixture: ComponentFixture<ModifAuteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifAuteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifAuteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
