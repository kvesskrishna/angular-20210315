import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
})
export class DiscountPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    console.log(args);
    let newprice = value - (args[0] * value) / 100 + (args[1] * value) / 100;
    return newprice;
  }
}
