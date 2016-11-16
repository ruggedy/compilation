import { Action } from '@ngrx/store';
import { type } from '../util';
import { Quote } from '../models/quote';


export const ActionTypes = {
	GET: 						type('[quote] Get'),
	GET_COMPLETE: 				type('[quote] Get Complete'),
	ADD:  						type('[quote] Add'),
	ADD_COMPLETE:  				type('[quote] Add Complete'),
	EDIT: 						type('[quote] Edit'),
	EDIT_COMPLETE: 				type('[quote] Edit Complete'),
	DELETE: 					type('[quote] Delete'),
	DELETE_COMPLETE: 			type('[quote] Delete Complete'),
	SELECT: 					type('[quote] Select')
};



export class GetQuotes implements Action{
	type = ActionTypes.GET;
}

export class GetQuotesComplete implements Action{
	type = ActionTypes.GET_COMPLETE;

	constructor(public payload: Quote){}
}


export class AddQuote implements Action {
	type = ActionTypes.ADD;

	constructor(public payload: Quote) {}
}

export class selectQuote implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: Quote){}
}

export class AddQuoteComplete implements Action {
	type = ActionTypes.ADD_COMPLETE;

	constructor(public payload: Quote) {}
}

export class EditQuote implements Action {
	type = ActionTypes.EDIT;

	constructor(public payload: Quote) {}
}

export class EditQuoteComplete implements Action {
	type = ActionTypes.EDIT_COMPLETE;

	constructor(public payload: Quote) {}
}

export class DeleteQuote implements Action {
	type = ActionTypes.DELETE;

	constructor(public payload: Quote) {}
}

export class DeleteQuoteComplete implements Action {
	type = ActionTypes.DELETE_COMPLETE;

	constructor(public payload: Quote) {}
}

export type Actions
	= AddQuote
	| AddQuoteComplete
	| EditQuote
	| EditQuoteComplete
	| DeleteQuote
	| DeleteQuoteComplete
	| GetQuotes
	| GetQuotesComplete
	| selectQuote


