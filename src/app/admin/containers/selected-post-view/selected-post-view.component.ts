import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Post } from '../../../models/post';
import { Tag } from '../../../models/tag';
import { Category } from '../../../models/category';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';

@Component({
    selector: 'app-selected-post-view',
    templateUrl: './selected-post-view.component.html',
    styleUrls: ['./selected-post-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedPostViewComponent {
    selectedPost: Observable<Post>
    constructor(private store: Store<fromRoot.State>, private router: Router) {
        this.selectedPost = store.let(fromRoot.getSelectedPost)
     }
}

