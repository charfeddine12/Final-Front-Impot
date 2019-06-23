import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpotsRPPsComponent } from './impots-rpps.component';

describe('ImpotsRPPsComponent', () => {
  let component: ImpotsRPPsComponent;
  let fixture: ComponentFixture<ImpotsRPPsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpotsRPPsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpotsRPPsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
