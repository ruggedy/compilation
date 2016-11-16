import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';


export const ActionTypes = {
	TOGGLE: 					type('[Editor] Toggle')
};



export class Toggle implements Action{
	type = ActionTypes.TOGGLE;

	constructor(public payload: boolean) {}
}

export type Actions
	= Toggle


