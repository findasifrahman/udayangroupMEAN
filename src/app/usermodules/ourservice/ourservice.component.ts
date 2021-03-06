import { Component, OnInit, AfterViewInit, AfterViewChecked, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FlipAnimation } from "../../animations/flipanimation/flipanimation";
@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations:FlipAnimation.animations
})
export class OurserviceComponent implements OnInit {

  icons: string[] = ['http','android','airplay','favorite','sd-storage','waves',];
  titles: string[] = ['Product development',' Order / production','Delivery','Hearing','Inquiry by e-mail','Final cost estimate'];
  colors: string[] = ["Highlight",'yellowgreen','orangered','orangered','Highlight','yellowgreen'];
  constructor(private cd: ChangeDetectorRef) { }
  flip = 'active';
  ngOnInit() {
  }

  toggleFlip() {
  }
  enterm(){
    this.flip = this.flip === 'inactive' ? 'active' : 'inactive';
    console.log(this.flip);
  }
}
