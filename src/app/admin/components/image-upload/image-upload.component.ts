import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'app-image-upload',
	templateUrl: './image-upload.component.html',
	styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {
	@Input()imageList: string[] = [];
	@Output() imageUpload = new EventEmitter();
	@Output() selectedImage = new EventEmitter();
	@Input() currentImage: string;
	constructor() {
		
	 }

	 validateChecked(event){
		if(event === this.currentImage){
			return true
		}

		return false;
	}


}
