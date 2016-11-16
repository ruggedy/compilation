import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import * as imageUpload from '../actions/image-upload';

export interface State {
	imageLocation: string[];
}


const initialState: State = {
	imageLocation: []
};

export function reducer(state = initialState, action: imageUpload.Actions): State {
	switch (action.type) {

		case imageUpload.ActionTypes.ADD_COMPLETE: {
			if (action.payload === null) {
				return state;
			}

			return Object.assign({}, state, {
				imageLocation: [...state.imageLocation, ...action.payload]
			})
		}

		case imageUpload.ActionTypes.SELECTED: {
			if (action.payload === null || undefined || '') {
				return state
			}

			return Object.assign({}, state, {
				imageLocation: [action.payload]
			})
		}

		default: {
			return state;
		}
	}
}

export function getImageLocations(state$: Observable<State>) {
	return state$.select(state => state.imageLocation);
}



