import { NgModule } from '@angular/core';

import { ArrayPipe } from './array.pipe';
import { WordPipe } from './word.pipe';
import { DateSortPipe } from './date-sort.pipe';


export const PIPES = [
  ArrayPipe,
  WordPipe,
  DateSortPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class PipesModule { }