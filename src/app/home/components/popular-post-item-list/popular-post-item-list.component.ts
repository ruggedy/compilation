import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
	selector: 'app-popular-post-item-list',
	templateUrl: './popular-post-item-list.component.html',
	styleUrls: ['./popular-post-item-list.component.scss']
})
export class PopularPostItemListComponent {
	@Input() posts: Post[];
	@Output() selectedPost = new EventEmitter(); 
	constructor() { }

}
