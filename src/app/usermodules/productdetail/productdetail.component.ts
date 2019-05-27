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

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log("update id--" + params['id']);
      this.pservice.getbyid(this.id).subscribe(data=>{
        this.name = data["productname"];
        this.title = data["producttitle"];
        this.desc = data["description"];
        this.price = data["price"];
        this.image1 = this.mainuri + data["image1"];
        this.image2 = this.mainuri + data["image2"];
        this.image3 = this.mainuri + data["image3"];
        this.image4 = this.mainuri + data["image4"];
      })
    })

    this.productInGroup = [];
    this.pservice.getAll().subscribe((posts) => {
      this.AllElement = posts;
    });
    this.pgService.getAll().subscribe(posts =>{
      this.groups = posts;
    })

    this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;
          quote.map(element => {
            this.finalarr = [];
            this.pservice.getbygroup(element.groupname)
            .pipe(map((data) => {
              this.productInGroup[flag] = [];
              data.map((dval)=>{
                console.log(dval["Id"]);
                this.productInGroup[flag].push({name: dval["productname"], id: String(dval["Id"])});
              })
              flag++;
              //return data;
            })
            ).subscribe((data) => {
              if(quote.length == flag){
                var indexv = 0;
                this.groups.map((laval)=>{
                  var obj = {name: this.groups[indexv].groupname,children:this.productInGroup[indexv]};
                  this.finalarr.push(obj);
                  indexv++;
                  if(indexv == this.groups.length){
                    //this.dataSource.data = this.finalarr;
                    this.datasource = this.finalarr;
                    //console.log(this.finalarr);
                  }
                })
              }
            })
          });
        return this.pservice.getbygroup(this.productInGroup)
      })).subscribe((pata) => {
    })

  }
}
