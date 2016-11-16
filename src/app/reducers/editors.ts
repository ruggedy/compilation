import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as editor from '../actions/editor';

export interface State {
	active: boolean
}


const initialState: State = {
	active: false
};

export function reducer(state = initialState, action: editor.Actions): State {
	switch (action.type) {
		case editor.ActionTypes.TOGGLE: {

			return Object.assign({}, state, {active: action.payload})
		}
	
		default:{
			return state;
		}		
	}
}

export function getEditorState(state$: Observable<State>) {
	return state$.select(state => state.active);
}


