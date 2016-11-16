import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-info',
  templateUrl: './time-info.component.html',
  styleUrls: ['./time-info.component.scss']
})
export class TimeInfoComponent implements OnInit {
  dates: Array<any> = [];
  admissions: Array<any> = [];
  teaRoom: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.dates = [
      {
        day: 'Daily',
        open: '10:30am',
        close: '5:30pm',
        last: '4:30pm'
      },
      {
        day: 'Sunday and Bank Holidays',
        open: '12:00am',
        close: '4:00pm',
        last: '3:30pm'
      },
      {
        day: 'Monday',
        open: false,
        close: NaN,
        last: NaN
      },

    ]

    this.admissions = [
      {
        type: 'Adult',
        price: '£4.00'
      },
      {
        type: 'Concessions',
        price: '£2.00'
      },
      {
        type: 'child under age 12',
        price: 'free'
      }
    ]

    this.teaRoom = [
      {
        day: 'daily',
        open: '10:30am',
        close: '4:30pm',
      },
      {
        day: 'Sunday and Bank Holidays',
        open: '12:00am',
        close: '3:30pm',
      },
      {
        day: 'Monday',
        open: 'Closed',
        close: NaN,
        last: NaN
      },

    ]

  }

}
