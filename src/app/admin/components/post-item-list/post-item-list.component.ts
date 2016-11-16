import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from '../../../models/post';
import { IPaginationInstance } from 'ng2-pagination';

@Component({
	selector: 'app-post-item-list',
	templateUrl: './post-item-list.component.html',
	styleUrls: ['./post-item-list.component.scss']
})
export class PostItemListComponent {

	@Input()posts: Post[];
	@Output()edit = new EventEmitter();
	@Output()delete = new EventEmitter();
	@Output()feature = new EventEmitter();
    @Output()postItemClicked = new EventEmitter();

	public config: IPaginationInstance = {
		id: 'post',
		itemsPerPage: 12,
		currentPage: 1
	}

	onPageChange(number: number){
		this.config.currentPage = number;
	}
	constructor() { }


}
