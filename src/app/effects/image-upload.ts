import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { ImageUploadService, PostService } from '../shared';
import * as imageUpload from '../actions/image-upload';



@Injectable()
export class ImageUploadEffects {
	constructor(private actions$: Actions, private uploadService: ImageUploadService, private postService: PostService) { }

	@Effect()
	add$: Observable<Action> = this.actions$
		.ofType(imageUpload.ActionTypes.ADD)
		.map(toPayload)
		.switchMap(value => {
			
			if (value === undefined || '' || null) {
				return empty();
			}

			return this.uploadService.uploadImage(value.images)
				.map(res => new imageUpload.AddCompleted(res.obj))
				.catch(() => of(new imageUpload.AddCompleted(null)))
		})
}




