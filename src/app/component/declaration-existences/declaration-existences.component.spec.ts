import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclarationExistencesComponent } from './declaration-existences.component';

describe('DeclarationExistencesComponent', () => {
  let component: DeclarationExistencesComponent;
  let fixture: ComponentFixture<DeclarationExistencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeclarationExistencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeclarationExistencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
