import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component {
  
  updatename:any = "";
  @Input() name:any;
  @Output() namese = new EventEmitter<string>();
  clicked(){
    this.updatename = this.name;
    this.namese.emit(this.updatename);
  }

  
}
