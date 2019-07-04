import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundSelectionComponent } from './fund-selection.component';

describe('FundSelectionComponent', () => {
  let component: FundSelectionComponent;
  let fixture: ComponentFixture<FundSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
