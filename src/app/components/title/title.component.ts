import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

    @Output() outTitle = new EventEmitter();
    @Input() inTitle = '';
	@Input() inChecked= false;
    @Output()checked = new EventEmitter();
    constructor() { }

    ngOnInit() {
    }

}
