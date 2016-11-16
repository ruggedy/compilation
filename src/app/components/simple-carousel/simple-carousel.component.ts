import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-carousel',
  templateUrl: './simple-carousel.component.html',
  styleUrls: ['./simple-carousel.component.scss']
})
export class SimpleCarouselComponent implements OnInit {
  @Input() collections: Array<any>;

  constructor() { }

  ngOnInit() {
  }

}
