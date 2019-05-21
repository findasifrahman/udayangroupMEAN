import { Directive,ElementRef,Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight') appHighlight:string;
  @Input() defaultColor:string;

  @HostListener('mouseenter') onenter(){
    this.el.nativeElement.style.color = this.appHighlight;
  }
  @HostListener('mouseleave') onleave(){
    if(this.defaultColor!= null){
      this.el.nativeElement.style.color = this.defaultColor;
    }
    else{
      this.el.nativeElement.style.color = null;
    }
  }
  constructor(private el:ElementRef) {
    console.log(this.appHighlight);
  }

}
