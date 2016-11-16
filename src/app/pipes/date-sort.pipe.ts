import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post'; 
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({name: 'dateSort'})
export class DateSortPipe implements PipeTransform {
  transform(value: Post[], length: number= 4): any {
	  let newArr = value.sort((a, b) => {
		  let dateA = new Date(a.createdAt);
		  let dateB = new Date(b.createdAt);

		  if(dateA.getTime() < dateB.getTime()) {
			  return 1;
		  } else if (dateA.getTime() > dateB.getTime()) {
			  return -1;
		  } else {
			  return 0;
		  }
	  });
	  return newArr;
  }
}