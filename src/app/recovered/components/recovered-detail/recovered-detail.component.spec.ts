import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoveredDetailComponent } from './recovered-detail.component';

describe('RecoveredDetailComponent', () => {
  let component: RecoveredDetailComponent;
  let fixture: ComponentFixture<RecoveredDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoveredDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecoveredDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
