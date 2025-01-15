import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'viewchild';
  fromchild:any;
  tochild:any="";
  message:any;

  tochildfun(){
    this.message = this.tochild;
  }
  childmess(data:any){
    this.fromchild = data;
  }
}
