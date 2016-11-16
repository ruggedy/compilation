import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post';

import { Router } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as post from '../../../actions/post';

@Component({
	selector: 'app-all-post',
	templateUrl: './all-post.component.html',
	styleUrls: ['./all-post.component.scss']
})
export class AllPostComponent {
	allPosts$: Observable<Post[]>
	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.allPosts$ = store.let(fromRoot.getAllPosts);
	}

	editAction(event) {
		this.router.navigate(['admin', 'edit', event]);
	}

	deleteAction(event) {
		this.store.dispatch(new post.DeletePost(event));
	}

	featuredAction(event: string) {
		this.store.dispatch(new post.EditFeatured(event));
	}

	postItemClickedAction(event: string) {
		this.router.navigate(['admin', 'view', event]);
	}

	ngOnInit() {
	}

}
