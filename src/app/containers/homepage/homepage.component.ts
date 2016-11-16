import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  articles: Array<any> = [];
  events: Array<any> = [];
  collections: Array<any> = [];
  collectionData: Array<any> = [];
  banner: Object;

  constructor() { }

  ngOnInit() {
    this.banner = {
      image: '/assets/images/capturing.png',
      title: 'Capturing Cambridge',
      body: `Capturing Cambridge is a new venture at the Museum of Cambridge to develop the Museum as a venue, resource centre and 'home' for local and community history projects in Cambridge`
    }
    this.articles = [
      {
        mainPicture: '/assets/images/capturing_cambridge.jpg'
      }
    ]
    this.events = [
      {
        mainPicture: '/assets/images/events.jpg'
      }
    ]
    this.collections = [
      {
        mainPicture: '/assets/images/collection.jpg'
      }
    ]
    this.collectionData = [
      {
        mainPicture: '/assets/images/mangle.jpg',
        title: 'Mangle'
      },
      {
        mainPicture: '/assets/images/clock.jpg',
        title: 'Long-case Clock'
      },
      {
        mainPicture: '/assets/images/Hobson.jpg',
        title: "Hobson's Conduit"
      },
      {
        mainPicture: '/assets/images/parkers.jpg',
        title: "Print of Parker's Piece"
      },
      {
        mainPicture: '/assets/images/vacuum.jpg',
        title: "Star Vacuum Cleaner"
      },
      {
        mainPicture: '/assets/images/collection.jpg',
        title: "The Folklore Collection"
      },
    ]
  }

}
