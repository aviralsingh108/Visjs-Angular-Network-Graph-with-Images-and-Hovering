import { Component, OnInit } from '@angular/core';
import { DataSet, Network } from 'vis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GraphImpementation';
  graphData = {};

  constructor() { }

  ngAfterContentInit(){
    // create an array with nodes
    var nodes = new DataSet([
      {id: 1, label: 'Delhi',shape:'image',image:'assets/a.png',font: {color:'black'}, title:"Am I hovering"},
      {id: 2, label: 'Bangalore',shape:'image',image:'assets/b.png',font: {color:'black'}},
      {id: 3, label: 'Chennai',shape:'image',image:'assets/c.png',font: {color:'black'}},
      {id: 4, label: 'Lucknow',shape:'image',image:'assets/d.png',font: {color:'black'}},
      {id: 5, label: 'Mumbai',shape:'image',image:'assets/m.png',font: {color:'black'}},
    ]);

    // create an array with edges
    var edges = new DataSet([
      {id:6,from: 1, to: 3,arrows:"to",width:3,color: {highlight: "red"}},
      {id:7,from: 1, to: 2,arrows:"to",width:3,color: {highlight: "red"}},
      {id:8,from: 2, to: 4,arrows:"to",width:3,color: {highlight: "red"}},
      {id:9,from: 2, to: 5,arrows:"to",width:3,color: {highlight: "red"}},
      {id:10,from: 2, to: 1,arrows:"to",width:3,color: {highlight: "red"}},
      {id:11,from: 1, to: 5,arrows:"to",width:3,color: {highlight: "red"}},
    ]);
    
    var options = {interaction:{hover:true, tooltip: {
      delay: 1,
      fontColor: "black",
      fontSize: 14, // px
      fontFace: "verdana",
      color: {
        border: "#666",
        background: "#FFFFC6"
      }
  }}};


    // provide the data in the vis format
    this.graphData["nodes"] = nodes;
    this.graphData["edges"] = edges;
    this.graphData["options"]= options;

    
  }
}


