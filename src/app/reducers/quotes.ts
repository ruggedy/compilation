import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Quote } from '../models/quote';
import * as quote from '../actions/quote';

export interface State {
	id: string
	entity: { [id: string]: Quote };
}


const initialState: State = {
	id: '',
	entity: {}
};

export function reducer(state = initialState, action: quote.Actions): State {
	switch (action.type) {
		case quote.ActionTypes.GET_COMPLETE:
		case quote.ActionTypes.EDIT_COMPLETE:
		case quote.ActionTypes.ADD_COMPLETE: {
			if (action.payload === undefined || null || '') {
				return state
			}


			const quote = action.payload;

			const quoteId = quote._id;

			const quoteEntity = {
				[quote._id]: quote
			}

			return Object.assign({}, state, {
				id: quoteId,
				entity: quoteEntity
			});


		}

		case quote.ActionTypes.DELETE_COMPLETE: {

			if (action.payload === undefined || null || '') {
				return state
			}

			return initialState
		}

		default: {
			return state;
		}
	}
}

export function getQuoteId(state$: Observable<State>) {
	return state$.select(state => state.id);
}

export function getQuoteEntitiy(state$: Observable<State>) {
	return state$.select(state => state.entity);
}


