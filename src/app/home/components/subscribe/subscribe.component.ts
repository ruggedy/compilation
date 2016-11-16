import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-subscribe',
	templateUrl: './subscribe.component.html',
	styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent implements OnInit {
	emailValue: string = "";
	@Output() email = new EventEmitter();
	constructor() { }

	ngOnInit() {
	}

	sendEmail(event) {
		console.log(this.emailValue);
	}

}
