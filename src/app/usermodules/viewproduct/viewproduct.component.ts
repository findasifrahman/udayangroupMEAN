import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
import { map,switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
import { routeurls } from "../../adminmodules/routeurls/routeurls";


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})

export class ViewproductComponent implements OnInit {
  @Input() parentClicktemit:any;
  @Input() childClickemit:any;

  mainuri = routeurls.BASE_API_URL + routeurls.File_UPLOAD_STATIC_VIEW_URL;
  AllElement: any;

  constructor(private pService:ProductsService,private pgService:ProductgroupService,private router: Router) { }
  productInGroup:any[][];
  groups:any[];
  finalarr : any = [];
  datasource: any = [];
  groupByList(val){
    this.pService.getbygroup(val).subscribe((posts) => {
      this.AllElement = posts;
    });
  }
  productsclick(val){
    this.router.navigate(["/productdetail/" + val]);
  }
  uri(ii){
    return this.mainuri + ii;
  }
  ngOnInit() {
    this.productInGroup = [];
    this.pService.getAll().subscribe((posts) => {
      this.AllElement = posts;
    });


    this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;this.groups = [];
          quote.map(element => {
            this.finalarr = [];
            this.pService.getbygroup(element.groupname)
            .pipe(map((data) => {
              this.productInGroup[flag] = [];
              this.groups.push(element);
              data.map((dval)=>{
                console.log(element.groupname);
                console.log(dval["Id"]);
                this.productInGroup[flag].push({name: dval["productname"], id: String(dval["Id"])});
              })
              flag++;
              //return data;
            })
            ).subscribe((data) => {
              if(quote.length == flag){
                console.log(this.groups);
                var indexv = 0;
                this.groups.map((laval)=>{
                  var obj = {name: this.groups[indexv].groupname,children:this.productInGroup[indexv]};
                  this.finalarr.push(obj);
                  indexv++;
                  if(indexv == this.groups.length){
                    this.datasource = this.finalarr;
                  }
                })
              }
            })
          });
        return this.pService.getbygroup(this.productInGroup)
      })).subscribe((pata) => {
    })

  }
//



}
