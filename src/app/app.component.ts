import { Component, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title = 'direct-sales';
  bsValue = new Date();

  SelectedCurrency: string;
  selectCurrencyChangeHandler(event: any) {
    this.SelectedCurrency = event.target.value;
  }

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
  }
}
