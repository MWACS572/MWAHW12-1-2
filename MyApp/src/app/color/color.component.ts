import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  // @Output() color:EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
