import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../../models/tag';
@Component({
	selector: 'app-label-cloud',
	templateUrl: './label-cloud.component.html',
	styleUrls: ['./label-cloud.component.scss']
})
export class LabelCloudComponent implements OnInit {
	@Input() tags: Tag[];

	constructor() { 
		
	}

	ngOnInit() {
	}
}
