import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneMorlComponent } from './personne-morl.component';

describe('PersonneMorlComponent', () => {
  let component: PersonneMorlComponent;
  let fixture: ComponentFixture<PersonneMorlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonneMorlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonneMorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
