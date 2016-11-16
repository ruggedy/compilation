import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/Rx';

import { Store } from '@ngrx/store';

import { Quote } from '../../../models/quote';
import * as fromRoot from '../../../reducers';
import * as quote from '../../../actions/quote';

@Component({
	selector: 'app-quote-view',
	templateUrl: './quote-view.component.html',
	styleUrls: ['./quote-view.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuoteViewComponent {

	constructor(private store: Store<fromRoot.State>) { }


	addQuoteContent(event) {
		let value: Quote = {
			quote: event
		}
		this.store.dispatch(new quote.AddQuote(value))
	}

}
