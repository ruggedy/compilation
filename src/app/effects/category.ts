import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { PostService, BlogService } from '../shared';
import * as category from '../actions/category';



@Injectable()
export class CategoryEffects {
	constructor(private actions$: Actions, private postService: PostService, private blogService: BlogService) { }

	@Effect()
	add$: Observable<Action> = this.actions$
		.ofType(category.ActionTypes.ADD)
		.map(action => action.payload)
		.switchMap(query => {
			if (query === undefined || '' || null) {
				return empty();
			}

			return this.postService.newCategory(query)
				.map(value => new category.AddCompleted(value.obj))
				.catch(() => of(new category.AddCompleted(null)));
		});
	@Effect()
	get$: Observable<Action> = this.actions$
		.ofType(category.ActionTypes.GET)
		.switchMap(() => {

			return this.blogService.getCategories()
				.map(res => new category.GetCategoryComplete(res.obj))
				.catch(() => of(new category.GetCategoryComplete(null)))
		})
}

