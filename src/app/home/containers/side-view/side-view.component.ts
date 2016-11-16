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
    selector: 'app-side-view',
    templateUrl: './side-view.component.html',
    styleUrls: ['./side-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideViewComponent implements OnInit {

    featuredPost$: Observable<Post>;
	allPosts$: Observable<Post[]>;
	allTags$: Observable<Tag[]>;

    constructor(private store : Store<fromRoot.State>) {
        this.featuredPost$ = store.let(fromRoot.getFeaturedPost);
		this.allPosts$ = store.let(fromRoot.getAllPosts);
		this.allTags$ = store.let(fromRoot.getAllTags);
     }

    ngOnInit() {
    }

}
