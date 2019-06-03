import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'direct-sales';
  bsValue = new Date();

  selectedCurrency: String;
  selectCurrencyChangeHandler (event: any) {
    this.selectedCurrency = event.target.value;
  }
}
