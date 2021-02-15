import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rate } from '../models/rate'
import { Observable } from 'rxjs';

const rateApiURL = 'https://api.binance.com/api/v3/ticker/price';

@Injectable({
  providedIn: 'root'
})
export class RatesApiService {

  constructor(
    private http: HttpClient,
  ) { }

  getRates(): Observable<Rate[]> {
    return this.http.get<Rate[]>(rateApiURL);
  }
}
