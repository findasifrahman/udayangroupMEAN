import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
import { map,switchMap } from 'rxjs/operators'
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  @Input() parentClicktemit:any;
  @Input() childClickemit:any;
  mainuri = "http://localhost:8086/api/uploads/";

  gr:any;

  id:any;
  name;
  title;
  desc;
  price;
  image1;
  image2;
  image3;
  image4;
  image1prev;
  image2prev;
  image3prev;
  image4prev;
  productInGroup:any[][];
  groups;
  finalarr : any = [];
  datasource: any = [];

  AllElement: any;
  groupByList(val){
    this.pservice.getbygroup(val).subscribe((posts) => {
      this.AllElement = posts;
    });
  }
  productsclick(val){
    this.router.navigate(["/productdetail/" + val]);
  }
  constructor(private route: ActivatedRoute, private pservice:ProductsService,
    private pgService:ProductgroupService,private router: Router) { }
  changemainpic1(){
      this.image1 = this.image1prev;
    }
  changemainpic2(){
    this.image1 = this.image2prev;
  }
  changemainpic3(){
    this.image1 = this.image3prev;
  }
  changemainpic4(){
    this.image1 = this.image4prev;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("parmas--" + params['id']);
      this.pservice.getbyid(this.id).subscribe(data=>{
        this.name = data["productname"];
        this.title = data["producttitle"];
        this.desc = data["description"];
        this.price = data["price"];
        this.image1 = this.image1prev = this.mainuri + data["image1"];
        this.image2 = this.image2prev = this.mainuri + data["image2"];
        this.image3 = this.image3prev = this.mainuri + data["image3"];
        this.image4 = this.image3prev = this.mainuri + data["image4"];
      })
    })

    this.productInGroup = [];
    this.pservice.getAll().subscribe((posts) => {
      this.AllElement = posts;
    });
    this.pgService.getAll().pipe(posts => this.datasource = posts).subscribe(posts =>{
      this.groups = posts;
       this.datasource = posts;
    })

    /*this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;this.groups = [];
          quote.map(element => {
            this.finalarr = [];
            this.pservice.getbygroup(element.id).pipe(map((data) => {
              this.productInGroup[flag] = [];
              this.groups.push(element);
              data.map((dval)=>{
                console.log(dval["id"]);
                this.productInGroup[flag].push({productname: dval["productname"], id: String(dval["id"])});
              })
              flag++;
              //return data;
            })
            ).subscribe((data) => {
              if(quote.length == flag){
                var indexv = 0;
                this.groups.map((laval)=>{
                  var obj = {groupname: this.groups[indexv].groupname,id: this.groups[indexv].id,
                    products:this.productInGroup[indexv]};
                  this.finalarr.push(obj);
                  indexv++;
                  if(indexv == this.groups.length){
                    this.datasource = this.finalarr;
                    //console.log(this.finalarr);
                  }
                })
              }
            })
          });
        return this.pservice.getbygroup(this.productInGroup)
      })).subscribe((pata) => {
    })*/

  }
}
