import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  // @Input() name:any;

  // message = "";

  // @Output() messageChanged = new EventEmitter<string>();

  // txtchanged(){
  //   this.messageChanged.emit(this.message);
  // }

  // task
  // @Input() name1 : any;
  // message2 = "";
  // @Output() messageEvent = new EventEmitter<string>();

 
  // clicked(){
  //   this.messageEvent.emit(this.message2);

  // }


  // Task2
  @Input() parentobj1 : any;
  name2 = "";
  city2 = "";
   childobj:any = {};
  @Output() messageEvent = new EventEmitter<object>();

  butfun1(){
    this.childobj = {
      name2 : this.name2,
      city2 : this.city2

    }
    this.messageEvent.emit(this.childobj);
    this.name2 = "";
    this.city2 = "";
  }

}
