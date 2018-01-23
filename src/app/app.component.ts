import { Component, OnInit } from '@angular/core';

import { GetrateService } from './getrate.service';
import { ExchangeRate } from './excrate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private cryptoData: ExchangeRate[];
  rates: string[];
  interval: any;
  names: string[];
  updDate = new Date();


  constructor(private getRate: GetrateService) {}

  ngOnInit() {
        this.refreshData();
        this.interval = setInterval(() => {
          this.refreshData();
          this.updDate = new Date();
        }, 5 * 60 * 1000);
    }

  refreshData() {
    this.getRate.getCurrencyRate()
                         .subscribe(
                          data => this.cryptoData = data,
                          err => console.log('Unable to fetch CryptoCurreny Data!!!'),
//                          () => console.log(this.cryptoData)                         
                        );
  }

  printRates() {
      this.rates = [];
      this.names = [];
      for(let a in this.cryptoData) {
        this.rates[a] = this.cryptoData[a].price_usd;
        this.names[a] = this.cryptoData[a].name;
      }
    }
}
