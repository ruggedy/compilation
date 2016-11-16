import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-banner',
  templateUrl: './big-banner.component.html',
  styleUrls: ['./big-banner.component.scss']
})
export class BigBannerComponent implements OnInit {
  @Input()banner;


  get image() {
    return this.banner.image;
  }

  get title() {
    return this.banner.title;
  }

  get body() {
    return this.banner.body;
  }
  constructor() { }

  ngOnInit() {
  }

}
