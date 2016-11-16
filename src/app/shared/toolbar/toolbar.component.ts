import { Component, Output, EventEmitter, Input} from '@angular/core';

/**
 * This class represents the toolbar component.
 */
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent {
  @Input()toggle: boolean = false;
  @Output()navswitch: EventEmitter<boolean> = new EventEmitter<boolean>() ; 
  constructor(){}

  switchNav(){
    this.toggle = !this.toggle;
    this.navswitch.emit(this.toggle)
  }


}

