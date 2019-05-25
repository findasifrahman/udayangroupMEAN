import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
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
  constructor(private route: ActivatedRoute, private pservice:ProductsService,private pgService:ProductgroupService) { }

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

    this.pgService.getAll().subscribe(posts =>{
      this.gr = posts;
    })

  }
}
