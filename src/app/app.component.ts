import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

import { GetrateService } from './getrate.service';
import { ExchangeRate } from './excrate';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private datass: ExchangeRate[];
  rates: string[];
  interval: any;
  names: string[];
  excRate: [string,string];
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
                          data => this.datass = data,
                          err => console.log('Bad!!!'),
//                          () => console.log(this.datass)                         
                        );
  }

  printRates() {
      this.rates = [];
      this.names = [];
      for(let a in this.datass) {
        this.rates[a] = this.datass[a].price_usd;
        this.names[a] = this.datass[a].name;
      }
    }
}
