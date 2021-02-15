import { Pipe, PipeTransform } from '@angular/core';
import { RateSymbol } from '../models/rate-symbol'

@Pipe({
  name: 'symbol'
})
export class RatesSymbolPipe implements PipeTransform {
  transform(value: string): string {
    return RateSymbol[value];
  }
}
