import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
	selector: 'app-home-post-item',
	templateUrl: './home-post-item.component.html',
	styleUrls: ['./home-post-item.component.scss']
})
export class HomePostItemComponent {

	@Input()post:Post;
	@Output()selectedPost = new EventEmitter();

	constructor() { }

	get id() {
		return this.post._id;
	}

	get title() {
		return this.post.title;
	}

	get mainPicture() {
		return this.post.mainPicture;
	}

	get body() {
		return this.post.body;
	}

	get featured() {
		return this.post.featured;
	}

	get tags() {
		return this.post.tags;
	}

	get date() {
		return this.post.createdAt;
	}

}
