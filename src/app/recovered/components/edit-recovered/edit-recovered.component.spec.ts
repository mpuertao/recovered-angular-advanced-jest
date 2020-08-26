import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecoveredComponent } from './edit-recovered.component';

describe('EditRecoveredComponent', () => {
  let component: EditRecoveredComponent;
  let fixture: ComponentFixture<EditRecoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
