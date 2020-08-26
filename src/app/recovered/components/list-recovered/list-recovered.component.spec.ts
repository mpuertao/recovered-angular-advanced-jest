import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRecoveredComponent } from './list-recovered.component';

describe('ListRecoveredComponent', () => {
  let component: ListRecoveredComponent;
  let fixture: ComponentFixture<ListRecoveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListRecoveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRecoveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
