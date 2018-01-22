import { Injectable } from '@angular/core';
import { HttpRequest, HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { map } from 'rxjs/operators';

import { ExchangeRate } from './excrate';

@Injectable()
export class GetrateService {
  private cryptoUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
  private rate: string;
  
  constructor(private http: HttpClient) { }

  getCurrencyRate() {
    return this.http.get<ExchangeRate[]>(this.cryptoUrl);   
  }
}

