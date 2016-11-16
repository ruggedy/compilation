import 'rxjs/add/operator/let';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { environment } from '../environments/environment';

import * as fromRoot from './reducers';
import { Post } from './models/post';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	posts$: Observable<Post[]>;

	prod = environment.production;

	constructor(store: Store<fromRoot.State>){
		this.posts$ = store.let(fromRoot.getAllPosts);
	}
}
