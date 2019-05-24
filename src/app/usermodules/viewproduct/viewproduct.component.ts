import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../adminmodules/products/products.service';
import { map, take,tap,first } from 'rxjs/operators'
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  mainuri = "http://localhost:8086/api/uploads/"
  AllElement: any;
  constructor(private pService:ProductsService) { }

  uri(ii){
    console.log(this.mainuri + ii);
    return this.mainuri + ii;
  }
  ngOnInit() {
    this.pService.getAll()
    .subscribe((posts) => {
        this.AllElement = posts;//.push(post);
      //posts.map(func)

    });
  }

}
