import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import '@ngrx/core/src/add/operator/select';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

import { Store } from '@ngrx/store';

import * as fromRoot from '../../../reducers';
import * as post from '../../../actions/post';

@Component({
  selector: 'app-view-selected-post',
  templateUrl: './view-selected-post.component.html',
  styleUrls: ['./view-selected-post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ViewSelectedPostComponent implements OnDestroy {
	actionSubscriptions: Subscription;

  constructor(private store: Store<fromRoot.State>, private route: ActivatedRoute) { 
	  this.actionSubscriptions = route.params
	  	.select<string>('id')
		.map(id => new post.selectPost(id))
		.subscribe(store)
  }

  ngOnDestroy(){
	  this.actionSubscriptions.unsubscribe();
  }

}
