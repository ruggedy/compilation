import { Component, OnInit, Input } from '@angular/core';

import { Tag } from '../../../models/tag';

@Component({
	selector: 'app-label-item',
	templateUrl: './label-item.component.html',
	styleUrls: ['./label-item.component.scss']
})
export class LabelItemComponent {
	@Input() tag: Tag;

	constructor() { }

	get id(){
		return this.tag._id;
	}

	get name(){
		return this.tag.name
	}

	get postCount(){
		return this.tag.post.length;
	}


}
