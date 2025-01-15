import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-obj2',
  templateUrl: './obj2.component.html',
  styleUrls: ['./obj2.component.css']
})
export class Obj2Component {
  txtname:any = "";
  txtcity:any = "";
  updateobj = {
    name1 : "",
    city1 : ""
  }
  @Input() submitobj1:any = {
    name : "",
    city : ""
  };



  @Output() childEvent = new EventEmitter<object>();
  update(){
      this.updateobj = {
        name1 : ((this.txtname="")?(this.txtname=this.submitobj1.name):(this.txtname=this.txtname)),
        city1 : this.txtcity
      }
      console.log(this.updateobj);

      this.childEvent.emit(this.updateobj);
      
  }
}
