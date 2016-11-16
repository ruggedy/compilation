import { Component, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';

import { environment } from '../../../../environments/environment';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as editor from '../../../actions/editor';
import * as category from '../../../actions/category';
import * as tag from '../../../actions/tag';
import * as imageUpload from '../../../actions/image-upload';
import * as post from '../../../actions/post';

declare var tinymce: any;

@Component({
	selector: 'app-post',
	templateUrl: './post.component.html',
	styleUrls: ['./post.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush

})

export class PostComponent implements OnInit {
	categories$: Observable<Category[]>;
	tags$: Observable<Tag[]>;
	images$: Observable<string[]>;

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
	}

	onSubmit() {

		if (this.postContent && this.title && this.mainPicture && this.categoryContent && this.tagsContent) {

			let data: any = {
				title: this.title,
				body: this.postContent,
				category: this.categoryContent,
				tags: this.tagsContent,
				mainPicture: this.mainPicture ? this.mainPicture : '',
				featured: this.featured
			}

			this.store.dispatch(new post.AddPost(data))

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
    console.log(environment.API_DEST);
	}


}
