import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the ProductPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'product',
})
export class ProductPipe implements PipeTransform {

    name: string;
    size: number;
    photo: string;
    status: string;
    charges: number;

  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, ...args) {
    return value.toLowerCase();
  }
}
