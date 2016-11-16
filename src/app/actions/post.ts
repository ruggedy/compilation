import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { type } from '../util';


export const ActionTypes = {
	GET: 						type('[post] Get'),
	GET_COMPLETE: 				type('[post] Get Complete'),
	GET_FEATURED: 				type('[post] Get Featured'),
	EDIT_FEATURED: 				type('[post] Edit Featured'),
	EDIT_FEATURED_COMPLETE: 	type('[post] Edit Featured Complete'),
	GET_FEATURED_COMPLETE: 		type('[post] Get Featured Complete'),
	ADD:  						type('[Post] Add'),
	ADD_COMPLETE:  				type('[Post] Add Complete'),
	EDIT: 						type('[Post] Edit'),
	EDIT_COMPLETE: 				type('[Post] Edit Complete'),
	DELETE: 					type('[Post] Delete'),
	DELETE_COMPLETE: 			type('[Post] Delete Complete'),
	SELECT: 					type('[Post] Select')
};



export class GetPosts implements Action{
	type = ActionTypes.GET;
}

export class GetPostsComplete implements Action{
	type = ActionTypes.GET_COMPLETE;

	constructor(public payload: Post[]){}
}

export class GetFeatured implements Action{
	type = ActionTypes.GET_FEATURED;

}

export class EditFeatured implements Action{
	type = ActionTypes.EDIT_FEATURED

	constructor(public payload: string){}
}

export class EditFeaturedComplete implements Action{
	type = ActionTypes.EDIT_FEATURED_COMPLETE

	constructor(public payload: string){}

}

export class GetFeaturedComplete implements Action{
	type = ActionTypes.GET_FEATURED_COMPLETE

	constructor(public payload: Post){}
}


export class AddPost implements Action {
	type = ActionTypes.ADD;

	constructor(public payload: Post) {}
}

export class selectPost implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: string){}
}

export class AddPostComplete implements Action {
	type = ActionTypes.ADD_COMPLETE;

	constructor(public payload: Post) {}
}

export class EditPost implements Action {
	type = ActionTypes.EDIT;

	constructor(public payload: Post) {}
}

export class EditPostComplete implements Action {
	type = ActionTypes.EDIT_COMPLETE;

	constructor(public payload: Post) {}
}

export class DeletePost implements Action {
	type = ActionTypes.DELETE;

	constructor(public payload: string) {}
}

export class DeletePostComplete implements Action {
	type = ActionTypes.DELETE_COMPLETE;

	constructor(public payload: string) {}
}

export type Actions
	= AddPost
	| AddPostComplete
	| EditPost
	| EditPostComplete
	| DeletePost
	| DeletePostComplete
	| GetPosts
	| GetPostsComplete
	| GetFeatured
	| EditFeatured
	| EditFeaturedComplete
	| GetFeaturedComplete
	| selectPost


