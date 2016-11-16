import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Quote } from '../../models/quote';

/**
 * This class provides the NameList service with methods to read names and add names.
 */
@Injectable()
export class QuoteService {

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
	getQuote() {
		let headers = new Headers({ 'content-type': 'application/json' });

		return this.http.get(`${environment.API_DEST}quote`, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError)
	}

	addQuote(quote: Quote) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			quote: quote.quote
		});

		return this.http.post(`${environment.API_DEST}quote`, body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError)
	}

	editQuote(quote: Quote) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			quote: quote.quote
		});

		return this.http.patch(`${environment.API_DEST}quote`, body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError)
	}

	deleteQuote(quote: Quote) {
		let headers = new Headers({ 'content-type': 'application/json' });
		let body = JSON.stringify({
			quote: quote.quote
		});

		return this.http.post(`${environment.API_DEST}quote`, body, { headers: headers })
			.map((res: Response) => res.json())
			.catch(this.handleError)
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

