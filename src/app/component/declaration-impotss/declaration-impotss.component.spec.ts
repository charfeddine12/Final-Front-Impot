import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationImpotssComponent } from './declaration-impotss.component';

describe('DeclarationImpotssComponent', () => {
  let component: DeclarationImpotssComponent;
  let fixture: ComponentFixture<DeclarationImpotssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationImpotssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationImpotssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
