import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Obj1Component } from './obj1/obj1.component';
import { Obj2Component } from './obj2/obj2.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Component1Component,
    Component2Component,
    Obj1Component,
    Obj2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
