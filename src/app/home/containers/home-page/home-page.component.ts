import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import { Post } from '../../../models/post';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as category from '../../../actions/category';
import * as tag from '../../../actions/tag';
import * as post from '../../../actions/post';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
	allPosts$: Observable<Post[]>
	constructor(private store: Store<fromRoot.State>, private router: Router) {
		this.allPosts$ = store.let(fromRoot.getAllPosts);
	 }

	ngOnInit() {
	}

}
