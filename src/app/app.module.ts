import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';
  import {GraphVisDirective} from './graphvis.directive';


  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';


  @NgModule({
    declarations: [
      AppComponent,
      GraphVisDirective
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }