import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Rate } from '../models/rate';
import { RatesApiService } from '../services/rates-api.service'

@Component({
  selector: 'app-rates',
  templateUrl: './rates.component.html',
  styleUrls: ['./rates.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RatesComponent implements OnInit {

  rates: Rate[] = [];
  loading: boolean = true;

  constructor(
    private rateApi: RatesApiService,
  ) { }

  ngOnInit(): void {
    this.rateApi.getRates().subscribe(data => {
      this.rates = data;
      this.loading = false;
    })
  }

}
