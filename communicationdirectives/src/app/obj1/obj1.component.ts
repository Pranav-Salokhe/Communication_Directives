import { Component } from '@angular/core';

@Component({
  selector: 'app-obj1',
  templateUrl: './obj1.component.html',
  styleUrls: ['./obj1.component.css']
})
export class Obj1Component {
  name:any = "";
  city:any = "";
  submitobj = {
    name : "",
    city : ""
  }
  submit(){
    this.submitobj = {
      name : this.name,
      city : this.city
    }
    // this.name = "";
    // this.city = "";
  }

  received(msg:any){
    this.name = msg.name1;
    this.city = msg.city1;
  }
}
