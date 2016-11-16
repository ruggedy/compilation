import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
  selector: 'app-popular-post-item',
  templateUrl: './popular-post-item.component.html',
  styleUrls: ['./popular-post-item.component.scss']
})
export class PopularPostItemComponent  {

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
}
