import { Component } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component {
  txtname:any = "";
  txtname1:any = "";
  butfunc(){
    this.txtname1 = this.txtname;
  }
  updatevalue(msg:any){
    this.txtname = msg;
  }
}
