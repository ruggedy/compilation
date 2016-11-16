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

import { QuoteService } from '../shared';
import * as quote from '../actions/quote';



@Injectable()
export class QuoteEffects {
	constructor(private actions$: Actions, private quoteService: QuoteService) { }

	@Effect()
	add$: Observable<any> = this.actions$
		.ofType(quote.ActionTypes.ADD)
		.map(action => action.payload)
		.switchMap(query => {
			if (query === undefined || '' || null) {
				return empty()
			}

			return this.quoteService.addQuote(query)
				.map(res => new quote.GetQuotesComplete(res.obj))
				.catch(() => of(new quote.GetQuotesComplete(null)))
		})

	@Effect()
	get$: Observable<Action> = this.actions$
		.ofType(quote.ActionTypes.GET)
		.switchMap(() => {

			return this.quoteService.getQuote()
				.map(res => new quote.GetQuotesComplete(res.obj))
				.catch(() => of(new quote.GetQuotesComplete(null)))
		})
}

