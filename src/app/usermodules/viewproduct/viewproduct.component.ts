import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
import { map, mergeMap, concatMap, toArray } from 'rxjs/operators';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { routeurls } from '../../adminmodules/routeurls/routeurls';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})

export class ViewproductComponent implements OnInit {
  @Input() parentClicktemit: any;
  @Input() childClickemit: any;

  mainuri = routeurls.BASE_API_URL + routeurls.File_UPLOAD_STATIC_VIEW_URL;
  AllElement: any;
  Allgroup: any;
  constructor( private pService: ProductsService, private pgService: ProductgroupService,
               private router: Router) { }
  productInGroup: any[][];
  groups: any[];
  finalarr: any = [];
  datasource: any = [];
  index: any = 0;
  groupByList(val) {
    console.log(val);
    this.pService.getbygroup(val).subscribe((posts) => {
      this.AllElement = posts;
    });
  }
  productsclick( val ) {
    this.router.navigate([ '/productdetail/' + val ]);
  }
  uri(ii) {
    return this.mainuri + ii;
  }
  ngOnInit() {
    this.productInGroup = [];
    // console.log(this.pgService.getAll());

    const productGroup$ = this.pgService.getAll();

    productGroup$.pipe(
      mergeMap(prga => from(prga)),
      concatMap(prgi => this.pService.getbygroup(prgi['id']).pipe(
        map(products => {
          const obj = { id: '', groupname: '', products: '' };
          obj.id = prgi['id'];
          obj.groupname = prgi['groupname'];
          obj.products = products;
          return obj;
        })
      )),
      toArray()
    ).subscribe(val => this.datasource = val );

    /*productGroup$.pipe(
        mergeMap((productGroupArray) => from(productGroupArray)),
        concatMap(
          (productGroupItem) => this.pService.getbygroup(productGroupItem["id"]).pipe(
          map((product) => {
            let json = {};

            json['id'] = productGroupItem["id"];
            json['groupname'] = productGroupItem["groupname"];
            json['products'] = product;
            //console.log(json);
            this.finalarr.push(json);
            this.datasource = this.finalarr;
            return json;
          })
        ))
    ).subscribe((val) => {(this.index)++;this.finalarr.push(val);if(this.index==3) {
        this.datasource = this.finalarr;
        console.log(this.datasource);
      }
    });
    */
    this.pgService.getAll().subscribe((posts) => {
      this.Allgroup = posts;
    });
    this.pService.getAll().subscribe((posts) => {
      this.AllElement = posts;
    });

    /*this.pgService.getAll().subscribe(val=>{
      this.datasource = val;
      console.log(val);
    })*/

   /* this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;this.groups = [];
          quote.map(element => {
            this.finalarr = [];
            console.log(element.id);
            this.pService.getbygroup(element.id)
            .pipe(map((data) => {
              this.productInGroup[flag] = [];
              this.groups.push(element);
              data.map((dval)=>{
               // console.log(dval["Id"]);
                this.productInGroup[flag].push({productname: dval["productname"], id: String(dval["id"])});
              })
              flag++;
              //return data;
            })
            ).subscribe((data) => {
              if(quote.length == flag){
                //console.log(this.groups);
                var indexv = 0;
                this.groups.map((laval)=>{
                  var obj = {groupname: this.groups[indexv].groupname,id:this.groups[indexv].id,
                    products:this.productInGroup[indexv]};
                  this.finalarr.push(obj);
                  indexv++;
                  if(indexv == this.groups.length){
                    this.datasource = this.finalarr;
                    console.log(this.datasource);
                  }
                })
              }
            })
          });
        return this.pService.getbygroup(this.productInGroup)
      })).subscribe((pata) => {

    })*/
  //
  }



}
