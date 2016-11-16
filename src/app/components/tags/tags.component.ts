import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
	selector: 'app-tags',
	templateUrl: './tags.component.html',
	styleUrls: ['./tags.component.scss'],
})
export class TagsComponent implements OnInit {
	value = "";
	@Output()newTag = new EventEmitter();
	@Input()tagsList: any[] = [];
	@Input()checked: any[] = [];

	@Output() selectedTags = new EventEmitter();

	constructor() { }

	updateChecked(tag:any, event:any){
		let index = this.checked.indexOf(tag);
		if (event.checked) {
			if (index === -1) {
				this.checked = [...this.checked, tag];
			}
		} else {
			if (index !== -1) {
				this.checked = [...this.checked.slice(0, index), ...this.checked.slice(index+1)]
			}
		}


		this.selectedTags.emit(this.checked);
	}


	addTag(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			console.log(e.target.value);
			this.newTag.emit(e.target.value);
			this.value = "";
		}
	}

	ngOnInit() {

	}

	validateChecked(value: any){
	    if(this.checked && this.checked.length > 0){
	        for(let i=0; i<this.checked.length; i++) {
	            if(value === this.checked[i]) {
	                return true
	            }
	        }
	    }
	    return false;
	}

}