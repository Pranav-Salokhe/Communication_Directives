import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

@Input() childmess:any;
messagechild:any;

@Output() datatoparent = new EventEmitter<string>();
toparent(){
  this.datatoparent.emit(this.messagechild);
}
}
