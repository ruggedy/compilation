import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Tag } from '../models/tag';
import * as tag from '../actions/tag';

export interface State {
	ids: string[];
	entities: {[id: string]: Tag};
	selectedTagId: string | null;
}


const initialState: State = {
	ids: [],
	entities: {},
	selectedTagId: null
};

export function reducer(state = initialState, action: tag.Actions): State {
	switch (action.type) {
		case tag.ActionTypes.GET_COMPLETE: {

			if(action.payload === null){
				return state;
			}

			const tags = action.payload

			const newTagIds = tags.map(tag => tag._id);
			const newTagEntities = tags.reduce((entities: {[id: string]: Tag}, tag: Tag) => {
				return Object.assign(entities, {
					[tag._id]: tag
				})
			}, {})

			return Object.assign({}, state, {
				ids: newTagIds,
				entities: newTagEntities
			})
		}

		case tag.ActionTypes.ADD_COMPLETE: {
			if (action.payload === null) {
				return state;
			}

			const tag = action.payload;

			const newTagId = tag._id;
			const newTagEntity = {
				[tag._id]: tag
			}

			return Object.assign({}, state, {
				ids: [...state.ids, newTagId],
				entities: Object.assign({}, state.entities, newTagEntity)
			})
		}

		// case post.ActionTypes.GET_FEATURED_COMPLETE: {
		// 	if (action.payload === null){
		// 		return state;
		// 	}

		// 	const post = action.payload;

		// 	const featuredId = post._id;

		// 	return Object.assign({}, state, {
		// 		featuredPostId: featuredId
		// 	});
		// }

		// case post.ActionTypes.ADD: {
		// 	const post = action.payload

		// 	const newPostId = post._id;
		// 	const newPostEntities = {
		// 		[post._id] : post
		// 	}

		// 	if(post === null){
		// 		return state;
		// 	}

		// 	return {
		// 		ids: [ ...state.ids, newPostId],
		// 		entities: Object.assign({}, state.entities, newPostEntities),
		// 		featuredPostId: state.featuredPostId,
		// 		selectedPostId: state.selectedPostId
		// 	}
		// }

		// case post.ActionTypes.EDIT: {
		// 	const post = action.payload;

		// 	const postId = post._id;

		// 	const editPostEntity = {
		// 		[post._id] : post
		// 	}

		// 	return {
		// 		ids: state.ids,
		// 		entities: Object.assign({}, state.entities, editPostEntity),
		// 		featuredPostId: state.featuredPostId,
		// 		selectedPostId: state.selectedPostId
		// 	}
		// }

		// case post.ActionTypes.DELETE: {
		// 	const id = action.payload;
		// 	const index = state.ids.indexOf(id);

		// 	if (index < 0 ) {
		// 		return state
		// 	}

		// 	return Object.assign({}, state, {
		// 		ids: [...state.ids.slice(0, index), ...state.ids.slice(index+1)],
		// 		entities: Object.keys(state.entities).reduce((result, key) => {
		// 			if (key !== id) {
		// 				result[key] = state.entities[key];
		// 			}
		// 			return result
		// 		}, {})
		// 	});
		// }
	
		default:{
			return state;
		}		
	}
}

export function getTagIds(state$: Observable<State>) {
	return state$.select(state => state.ids);
}

export function getTagEntities(state$: Observable<State>) {
	return state$.select(state => state.entities);
}

export function getSelectedTagId(state$: Observable<State>) {
	return state$.select(state => state.selectedTagId);
}


