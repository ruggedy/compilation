import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
	selector: 'app-post-item',
	templateUrl: './post-item.component.html',
	styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {

	@Input() post: Post;
	@Output() edit = new EventEmitter();
	@Output() delete = new EventEmitter();
	@Output() changeFeatured = new EventEmitter();
    @Output() postItemClicked = new EventEmitter();

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

}
