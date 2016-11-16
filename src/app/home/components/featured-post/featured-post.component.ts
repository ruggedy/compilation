import { Component, Input } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
	selector: 'app-featured-post',
	templateUrl: './featured-post.component.html',
	styleUrls: ['./featured-post.component.scss']
})
export class FeaturedPostComponent {

	@Input()featuredPost: Post = null;

	get id() {
		return this.featuredPost._id;
	}

	get body() {
		return this.featuredPost.body;
	}

	get tags() {
		return this.featuredPost.tags;
	}

	get title() {
		return this.featuredPost.title;
	}

	get category() {
		return this.featuredPost.category;
	}

	get mainPicture() {
		return this.featuredPost.mainPicture;
	}

	get date() {
		return this.featuredPost.createdAt;
	}

}
