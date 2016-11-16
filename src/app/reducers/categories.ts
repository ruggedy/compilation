import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';

import { Observable } from 'rxjs/Observable';
import { combineLatest } from 'rxjs/observable/combineLatest';

import { Category } from '../models/category';
import * as category from '../actions/category';

export interface State {
	ids: string[];
	entities: {[id: string]: Category};
	selectedCategoryId: string | null;
}


const initialState: State = {
	ids: [],
	entities: {},
	selectedCategoryId: null
};

export function reducer(state = initialState, action: category.Actions): State {
	switch (action.type) {
		case category.ActionTypes.GET_COMPLETE: {

			if(action.payload === null){
				return state;
			}

			const categories = action.payload

			const newCategoryIds = categories.map(category => category._id);
			const newCategoryEntities = categories.reduce((entities: {[id: string]: Category}, category: Category) => {
				return Object.assign(entities, {
					[category._id]: category
				})
			}, {})

			return Object.assign({}, state, {
				ids: newCategoryIds,
				entities: newCategoryEntities
			})
		}

		case category.ActionTypes.ADD_COMPLETE: {
			if (action.payload === null) {
				return state;
			}

			const category = action.payload;

			const newCategoryId = category._id;
			const newCategoryEntity = {
				[category._id]: category
			}

			return Object.assign({}, state, {
				ids: [...state.ids, newCategoryId],
				entities: Object.assign({}, state.entities, newCategoryEntity)
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

export function getCategoryIds(state$: Observable<State>) {
	return state$.select(state => state.ids);
}

export function getCategoryEntities(state$: Observable<State>) {
	return state$.select(state => state.entities);
}

export function getSelectedCategoryId(state$: Observable<State>) {
	return state$.select(state => state.selectedCategoryId);
}



