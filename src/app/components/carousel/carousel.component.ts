import { Component, OnInit, trigger, state, style, transition, animate, Input } from '@angular/core';
import { MdGridListModule } from '@angular/material/grid-list';

export interface Images {
  image?: string,
  header?: string,
  text?: string
}

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	animations: [
		trigger('imageState', [
			state('zero', style({
				transform: 'translate3d(0%, 0px, 0px)'
			})),
			state('one',   style({
				transform: 'translate3d(-25%, 0px, 0px)'
			})),
			state('two', style({
				transform: 'translate3d(-50%, 0px, 0px)'
			})),
			state('three', style({
				transform: 'translate3d(-75%, 0px, 0px)'
			})),
			transition('zero <=> one', animate('1000ms ease')),
			transition('zero <=> two', animate('1000ms ease')),
			transition('zero <=> three', animate('1000ms ease')),
			transition('one <=> two', animate('1000ms ease')),
			transition('one <=> three', animate('1000ms ease')),
			transition('two <=> three', animate('1000ms ease'))
		])
  ]
})

export class CarouselComponent implements OnInit {

	currentIndex: number = 0;
	imagePos: string = 'zero';

	@Input()images: Images[] = [];

	borderClass(){

		if (this.currentIndex === 0) {
			return 'sync border-color-zero';
		} else if (this.currentIndex === 1) {
			return 'sync border-color-one';
		} else if (this.currentIndex === 2) {
			return 'sync border-color-two';
		} else if (this.currentIndex === 3) {
			return 'sync border-color-three';
		}

		return ''
	}

	changeIndex(index:any){
		this.currentIndex = index;
		if (index === 0) {
			this.imagePos = 'zero';
		} else if (index === 1) {
			this.imagePos = 'one'
		} else if (index === 2) {
			this.imagePos = 'two'
		} else if (index === 3) {
			this.imagePos = 'three'
		}

		console.log(this.imagePos);
	}

	constructor() { }

	ngOnInit() { }

}
