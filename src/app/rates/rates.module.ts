import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatesRoutingModule } from './rates-routing.module'
import { RatesComponent } from './rates.component';
import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    RatesComponent,
  ],
  imports: [
    CommonModule,
    RatesRoutingModule,
    PipesModule.forRoot(),
  ],
})

export class RatesModule { }
