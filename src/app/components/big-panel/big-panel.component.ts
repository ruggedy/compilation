import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-panel',
  templateUrl: './big-panel.component.html',
  styleUrls: ['./big-panel.component.scss']
})
export class BigPanelComponent implements OnInit {

  @Input() article: any;

  constructor() { }


	get id() {
		return this.article._id;
	}

	get title() {
		return this.article.title;
	}

	get mainPicture() {
		return this.article.mainPicture;
	}

	get body() {
		return this.article.body;
	}

	get featured() {
		return this.article.featured;
	}

  ngOnInit() {
    console.log(this.article)
  }

}
