import { Injectable } from '@angular/core';
import { Http, Headers, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {environment} from '../../../environments/environment';

@Injectable()
export class ImageUploadService {
	constructor() {}
	
	uploadImage(value: any): Observable<any> {
		
		return Observable.fromPromise(new Promise((resolve, reject) => {
			var formData: any = new FormData();
			var xhr = new XMLHttpRequest();
			
			let files = value;
			formData.append('random', 'randomshit');
			formData.append('another', 'stupid');
			console.log(files)
			for (let i = 0; i < files.length; i++) {
				formData.append('uploads[]', files[i], files[i].name);	
			}
			console.log(formData)
			xhr.onreadystatechange = () => {
				if (xhr.readyState === 4) {
					if(xhr.status === 200) {
						resolve(JSON.parse(xhr.response));
					} else {
						reject(xhr.response);
					}
				}
			}

			xhr.open('POST', environment.API_DEST +'image-upload', true);
			xhr.send(formData);

		}))
		.map((res: Response) => res)
        .catch(this.handleError);

	}

	/**
	  * Handle HTTP error
	  */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}


