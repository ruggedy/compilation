import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../../../models/post';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as editor from '../../../actions/editor';
import * as category from '../../../actions/category';
import * as tag from '../../../actions/tag';
import * as imageUpload from '../../../actions/image-upload';
import * as post from '../../../actions/post';

declare var tinymce: any;

@Component({
	selector: 'app-selected-post',
	templateUrl: './selected-post.component.html',
	styleUrls: ['./selected-post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class SelectedPostComponent implements OnInit, OnDestroy {
	categories$: Observable<Category[]>;
	tags$: Observable<Tag[]>;
	images$: Observable<string[]>;
	selectedPost$: Observable<Post>;

	selectedPostSubscription: Subscription;

	private postId: string | null = null;

	private postContent: string;
	private categoryContent: string;
	private tagsContent: string[];
	private mainPicture: string;
	private featured: boolean = false;
	private title: string;


	constructor(private sanitizer: DomSanitizer, private store: Store<fromRoot.State>, private router: Router) {
		this.categories$ = store.let(fromRoot.getAllCategories)
		this.tags$ = store.let(fromRoot.getAllTags)
		this.images$ = store.let(fromRoot.getImageUploaded)
		this.selectedPost$ = store.let(fromRoot.getSelectedPost)

		this.selectedPostSubscription = this.selectedPost$.subscribe(
			(data:Post) => {
				if (data) {
					this.postId = data._id;
					this.postContent = data.body;
					this.categoryContent = data.category;
					this.tagsContent = data.tags;
					this.title = data.title;
					this.mainPicture = data.mainPicture;
					this.featured = data.featured;

					this.store.dispatch(new imageUpload.Selected(data.mainPicture))
				}
			}
		)
	}

	onSubmit() {

		if (this.postContent && this.title && this.mainPicture && this.categoryContent && this.tagsContent) {
			let data: Post = {
				_id: this.postId,
				title: this.title,
				body: this.postContent,
				category: this.categoryContent,
				tags: this.tagsContent,
				mainPicture: this.mainPicture ? this.mainPicture : '',
				featured: this.featured
			}

			this.store.dispatch(new post.EditPost(data));
			this.router.navigate(['admin']);

		}

	}

	selectedTags(event) {
		this.tagsContent = event;
	}

	addNewCategory(value) {
		this.store.dispatch(new category.Add(value));
	}

	addNewTag(value) {
		this.store.dispatch(new tag.Add(value));
	}

	uploadImage(value: FileList) {

		console.log(value)
		let images: imageUpload.image = {
			images: value
		};
		this.store.dispatch(new imageUpload.Add(images));
	}

	ngOnInit() {

	}

	ngOnDestroy() {
		this.selectedPostSubscription.unsubscribe();
	}


}