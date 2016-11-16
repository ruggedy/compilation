import { Action } from '@ngrx/store';
import { Tag } from '../models/tag';
import { type } from '../util';


export const ActionTypes = {
	GET: 					type('[tag] Get'),
	GET_COMPLETE: 			type('[tag] Get Complete'),
	ADD:  					type('[tag] Add'),
	ADD_COMPLETE:  			type('[tag] Add Complete'),
	EDIT: 					type('[tag] Edit'),
	DELETE: 				type('[tag] Delete')
};



export class GetTag implements Action{
	type = ActionTypes.GET;
}

export class GetTagComplete implements Action{
	type = ActionTypes.GET_COMPLETE;

	constructor(public payload: Tag[]){}
}

export class Add implements Action{
	type = ActionTypes.ADD;

	constructor(public payload: Tag){}
}

export class AddComplete implements Action{
	type = ActionTypes.ADD_COMPLETE;

	constructor(public payload: Tag){}
}

export class Edit implements Action{
	type = ActionTypes.EDIT;

	constructor(public payload: Tag){}
}

export class Delete implements Action{
	type = ActionTypes.DELETE;

	constructor(public payload: Tag){}
}

export type Actions 
	= GetTag
	| GetTagComplete
	| Add
	| AddComplete
	| Edit
	| Delete