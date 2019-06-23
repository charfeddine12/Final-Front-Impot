import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpotsSocieteComponent } from './impots-societe.component';

describe('ImpotsSocieteComponent', () => {
  let component: ImpotsSocieteComponent;
  let fixture: ComponentFixture<ImpotsSocieteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpotsSocieteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpotsSocieteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
