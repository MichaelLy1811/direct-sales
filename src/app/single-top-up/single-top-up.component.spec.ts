import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTopUpComponent } from './single-top-up.component';

describe('SingleTopUpComponent', () => {
  let component: SingleTopUpComponent;
  let fixture: ComponentFixture<SingleTopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleTopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
