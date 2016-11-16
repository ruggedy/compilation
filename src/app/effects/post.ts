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

import { PostService, BlogService } from '../shared';
import * as post from '../actions/post';
import * as category from '../actions/category';
import * as tag from '../actions/tag';



@Injectable()
export class PostEffects {
	constructor(private actions$: Actions, private postService: PostService, private blogService: BlogService) { }

	@Effect()
	add$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.ADD)
		.map(action => action.payload)
		.switchMap(query => {
			if (query === undefined || '' || null) {
				return empty();
			}

			if (query.featured) {
				return Observable.concat(
					this.postService.newPost(query)
						.map(value => new post.AddPostComplete(value.obj))
						.catch(() => of(new post.AddPost(null))),

					this.blogService.getFeaturedPost()
						.map(res => new post.GetFeaturedComplete(res.obj.post))
						.catch(() => of(new post.GetFeaturedComplete(null))),

					this.blogService.getCategories()
						.map(res => new category.GetCategoryComplete(res.obj))
						.catch(() => of(new category.GetCategoryComplete(null))),
					this.blogService.getTags()
						.map(res => new tag.GetTagComplete(res.obj))
						.catch(() => of(new tag.GetTagComplete(null)))
				)
			} else {
				return Observable.concat(
					this.postService.newPost(query)
						.map(value => new post.AddPostComplete(value.obj))
						.catch(() => of(new post.AddPost(null))),

					this.blogService.getCategories()
						.map(res => new category.GetCategoryComplete(res.obj))
						.catch(() => of(new category.GetCategoryComplete(null))),

					this.blogService.getTags()
						.map(res => new tag.GetTagComplete(res.obj))
						.catch(() => of(new tag.GetTagComplete(null)))
				)
			}
		});

	@Effect()
	get$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.GET)
		.startWith(new post.GetPosts())
		.switchMap(() => {
			return Observable.concat(
				this.blogService.getPosts()
					.map(res => new post.GetPostsComplete(res.obj))
					.catch(() => of(new post.GetPostsComplete(null))),

				this.blogService.getFeaturedPost()
					.map(res => new post.GetFeaturedComplete(res.obj.post))
					.catch(() => of(new post.GetFeaturedComplete(null))),
				this.blogService.getCategories()
					.map(res => new category.GetCategoryComplete(res.obj))
					.catch(() => of(new category.GetCategoryComplete(null))),
				this.blogService.getTags()
					.map(res => new tag.GetTagComplete(res.obj))
					.catch(() => of(new tag.GetTagComplete(null)))
			)
		});

	@Effect()
	edit$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.EDIT)
		.map(action => action.payload)
		.switchMap(value => {
			if (value === undefined || '' || null) {
				return empty();
			}

			return this.postService.editPost(value)
				.map(res => new post.EditPostComplete(value))
				.catch(() => of(new post.EditPostComplete(null)))


		})

	@Effect()
	changeFeatured$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.EDIT_FEATURED)
		.map(action => action.payload)
		.switchMap(value => {
			if (value === undefined || null || '') {
				return empty();
			}

			return this.postService.changeFeatured(value)
				.map(res => new post.EditFeaturedComplete(value))
				.catch(() => of(new post.EditFeaturedComplete(null)))
		})

	@Effect()
	delete$: Observable<Action> = this.actions$
		.ofType(post.ActionTypes.DELETE)
		.map(action => action.payload)
		.switchMap(value => {
			if (value === undefined || null || '') {
				return empty();
			}

			return this.postService.deletePost(value)
				.map(res => new post.DeletePostComplete(value))
				.catch(() => of(new post.DeletePostComplete(value)))
		})

}