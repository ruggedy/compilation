import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';

@Component({
	selector: 'app-home-post-item-list',
	templateUrl: './home-post-item-list.component.html',
	styleUrls: ['./home-post-item-list.component.scss']
})
export class HomePostItemListComponent implements OnInit {

	@Input() posts: Post[];
	@Output() selectedPost = new EventEmitter(); 
	constructor() { }

	ngOnInit() {
	}

}
