import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  strings="";
  words="";
  wordArray=[];
  myarray = [];
  showString = " VISIBILITY";
  constructor(){

  }
  pushStrings(){
    this.myarray.push(this.strings);
    this.strings = "";

  }
  pushWords(){
    this.wordArray.push(this.words);
    this.words = "";
  }

  showOutput(e){
    alert(e);
  }
}
