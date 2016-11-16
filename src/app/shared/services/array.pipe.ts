import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'array'})
export class ArrayPipe implements PipeTransform {
  transform(value: any, length: number= 4): any {
	  let newArr = value.slice(0, length);
	  return newArr;
  }
}