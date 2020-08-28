import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncrementadorComponent } from './incrementador.component';

describe('IncrementadorComponent', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncrementadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
