import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivresCategorieComponent } from './livres-categorie.component';

describe('LivresCategorieComponent', () => {
  let component: LivresCategorieComponent;
  let fixture: ComponentFixture<LivresCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivresCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivresCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
