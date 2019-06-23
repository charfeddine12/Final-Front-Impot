import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnePhyzComponent } from './personne-phyz.component';

describe('PersonnePhyzComponent', () => {
  let component: PersonnePhyzComponent;
  let fixture: ComponentFixture<PersonnePhyzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnePhyzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnePhyzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
