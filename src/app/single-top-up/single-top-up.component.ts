import { AppComponent } from './../app.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-single-top-up',
  templateUrl: './single-top-up.component.html',
  styleUrls: ['./single-top-up.component.scss'],
  providers: [AppComponent]
})
export class SingleTopUpComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  singleTopUpForm: FormGroup;

  ngOnInit() {
    this.singleTopUpForm = this.fb.group({
      amount: [],
      topUpList: this.fb.array([this.fb.group({amout: ''})])
    })
  }

  get singleTopUp() {
    return this.singleTopUpForm.get('topUpList') as FormArray;
  }

  addTopUp() {
    this.singleTopUp.push(this.fb.group({amount: ''}));
  }

  removeTopUp(index) {
    this.singleTopUp.removeAt(index);
  }

}
