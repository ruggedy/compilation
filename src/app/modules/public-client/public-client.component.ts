import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-client',
  templateUrl: './public-client.component.html',
  styleUrls: ['./public-client.component.scss']
})
export class PublicClientComponent implements OnInit {


  carouselData = [
		{image: './assets/images/museum1.jpeg', header: 'Donating an Object' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: './assets/images/museum2.jpg', header: 'Fashion & Beauty' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: './assets/images/museum3.jpg', header: 'Shopping & Kitchen' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'},
		{image: './assets/images/museum4.jpg', header: 'Adventure & Health' , text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, maiores.'}

	]
  constructor() { }

  ngOnInit() {
  }

}
