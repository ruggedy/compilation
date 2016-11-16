import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-quote',
	templateUrl: './quote.component.html',
	styleUrls: ['./quote.component.scss']
})
export class QuoteComponent implements OnInit {
	@Output() quoteContent = new EventEmitter();
	@Input() quoteValue = '';
	
	constructor() { }

	ngOnInit() {
	}

}
