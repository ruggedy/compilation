import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Post } from '../../models/post';
import { environment } from '../../../environments/environment';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class PostService {

	/**
	 * Creates a new NameListService with the injected Http.
	 * @param {Http} http - The injected Http.
	 * @constructor
	 */
	constructor(private http: Http) { }

	/**
	 * Returns an Observable for the HTTP GET request for the JSON resource.
	 * @return {string[]} The Observable for the HTTP request.
	 */
	newPost(data: Post) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			title: data.title,
			body: data.body,
			category: data.category,
			tags: data.tags,
			mainPicture: data.mainPicture,
			featured: data.featured
		})
		return this.http.post(environment.API_DEST + 'post', body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	getCategorys(): Observable<any> {
		return this.http.get(environment.API_DEST + 'post/category')
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	newCategory(category: any) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			category: category
		});
		return this.http.post(environment.API_DEST + 'post/category', body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	getTags(): Observable<any> {
		return this.http.get(environment.API_DEST + 'post/tag')
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	newTags(tag: any) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			tag: tag
		});
		return this.http.post(environment.API_DEST + 'post/tag', body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	changeFeatured(postId: string) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			post: postId
		});
		return this.http.patch(environment.API_DEST + 'post/featured', body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError);
	}

	editPost(post: Post){
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			id: post._id,
			title: post.title,
			body: post.body,
			category: post.category,
			tags: post.tags,
			mainPicture: post.mainPicture,
			featured: post.featured
		})

		return this.http.patch(environment.API_DEST + 'post/'+post._id, body, {headers: headers})
			// .map((res: Response) => res.json())
			// .catch(this.handleError)
	}

	deletePost(postId: string) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			post: postId
		});

		return this.http.delete(environment.API_DEST + 'post/'+postId, { headers: headers })
	}

	/**
	  * Handle HTTP error
	  */
	private handleError(error: any) {
		// In a real world app, we might use a remote logging infrastructure
		// We'd also dig deeper into the error to get a better message
		console.log('it hits', error)
		let errMsg = (error.message) ? error.message :
			error.status ? `${error.status} - ${error.statusText}` : 'Server error';
		console.error(errMsg); // log to console instead
		return Observable.throw(errMsg);
	}
}

