import { Component, OnInit } from '@angular/core';
import { ThreecolmatgridComponent } from '../../sharedComponentmodules/threecolmatgrid/threecolmatgrid.component';
@Component({
  selector: 'app-ourservice',
  templateUrl: './ourservice.component.html',
  styleUrls: ['./ourservice.component.css']
})
export class OurserviceComponent implements OnInit {

  icons: string[] = ['http','android','airplay','favorite','sd-storage','waves',];
  titles: string[] = ['WEB DESIGN',' Mobile App Design','Desktop App Design','Electronics Design','Biometric Security','Embedded System'];
  colors: string[] = ["Highlight",'yellowgreen','orangered','orangered','Highlight','yellowgreen'];
  constructor() { }

  ngOnInit() {
  }

}
