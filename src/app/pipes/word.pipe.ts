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
@Pipe({name: 'word'})
export class WordPipe implements PipeTransform {
  transform(value: any, length: number= 30): any {
	  let text = String(value).replace(/<[^>]+>/gm, '');
	  return text.split(' ').splice(0, length).join(' ') + '....';
  }
}