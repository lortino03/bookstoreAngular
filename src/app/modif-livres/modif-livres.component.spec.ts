import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifLivresComponent } from './modif-livres.component';

describe('ModifLivresComponent', () => {
  let component: ModifLivresComponent;
  let fixture: ComponentFixture<ModifLivresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifLivresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifLivresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
