import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
  selector: 'app-fund-selection',
  templateUrl: './fund-selection.component.html',
  styleUrls: ['./fund-selection.component.scss']
})
export class FundSelectionComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  fundSelectionForm: FormGroup;

  ngOnInit() {
    this.fundSelectionForm = this.fb.group({
      name: [],
      fundName: this.fb.array([this.fb.group({name: ''})])
    })
  }

  get fundSelection() {
    return this.fundSelectionForm.get('fundName') as FormArray;
  }

  addFund() {
    this.fundSelection.push(this.fb.group({name: ''}))
  }

  removeFund(index) {
    this.fundSelection.removeAt(index);
  }
}
