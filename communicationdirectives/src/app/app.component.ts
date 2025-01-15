import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'communicationdirectives';
  // name = "";
  // message = "";

  // receivedMessage(msg:string){
  //   this.message = msg;
  // }


  // task
  // message1 = "";
  // childmes = "";
  // receivedMessage2(msg2:any){
  //   this.childmes = msg2;
  // }


  // Task2
  name1 = "";
  city1 = "";
  parentobj = {};
  parentobj1 = {
    name2 : "",
    city2 : ""
  };
  butfun(){
  this.parentobj = {
    name1 : this.name1,
    city1 : this.city1
  }
  this.name1 = "";
  this.city1 = "";
}

receivedMessage(msg:any){
  // this.parentobj1 = msg;
  this.parentobj1 = {
    name2 : msg.name2,
    city2 : msg.city2
  }
}
}
