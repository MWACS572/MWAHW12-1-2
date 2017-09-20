import { Directive, Renderer, ElementRef, EventEmitter, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Output() color:EventEmitter<string> = new EventEmitter();
  colorsArray:string[] = ['green', 'blue', 'red'];
  booleanValue= false;
  index=0;
  constructor(private e:ElementRef, private r: Renderer) {
    //r.setElementStyle(e.nativeElement, 'color', 'red');
  }
  @HostListener('click') coloring(){
    this.booleanValue = true;
    while(this.booleanValue){
        this.color.emit(this.colorsArray[this.index])
      this.index++;
        this.booleanValue = false;
        if(this.index===2){
          this.index  = 0;
        }
    }

  }
}
