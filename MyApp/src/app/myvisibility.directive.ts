/**
 * Created by Owner on 9/19/2017.
 */
import { Directive, ElementRef, Renderer, Input, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[visiblity]'
})
export class MyVisibilityDirective{

  @Input() booleanValue = true;
  val;

  constructor(private e: ElementRef, private r:Renderer){

  }
  @HostListener('mouseover') toggle(){
    if(this.booleanValue) {
      this.r.setElementStyle(this.e.nativeElement, 'visibility', 'hidden');


    }


 }








}
