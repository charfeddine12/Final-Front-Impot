import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribuablesComponent } from './contribuables.component';

describe('ContribuablesComponent', () => {
  let component: ContribuablesComponent;
  let fixture: ComponentFixture<ContribuablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribuablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribuablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
