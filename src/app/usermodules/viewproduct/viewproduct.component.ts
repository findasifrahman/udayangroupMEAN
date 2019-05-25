import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
import { map, take,tap,first,flatMap,filter,switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  mainuri = "http://localhost:8086/api/uploads/"
  AllElement: any;
  allgr:any;
  constructor(private pService:ProductsService,private pgService:ProductgroupService,private router: Router) { }
  la:any = [[]];
  gr;//:any = [];
  changelist(val){
    console.log(val);
    this.pService.getbygroup(val).subscribe((posts) => {
      this.AllElement = posts;
      //console.log(posts);
    });
  }
  proclick(val){
    this.router.navigate(["/productdetail/" + val]);
  }
  uri(ii){
    console.log(this.mainuri + ii);
    return this.mainuri + ii;
  }
  ngOnInit() {
    this.pService.getAll().subscribe((posts) => {
      this.AllElement = posts;
      //console.log(posts);
    });
    this.pgService.getAll().subscribe(posts =>{
      this.gr = posts;
    })
    /*this.pgService.getAll().pipe(map(x => {
      x.map(function(val){
        console.log(val);
      })
      this.pService.getbygroup(x[0].groupname).subscribe((posts) => {
        this.AllElement = posts;
        console.log(posts);
      });
      console.log(x[0]);
      return x
    })).subscribe((x) => {
      this.allgr = x as any;
      console.log(this.allgr);
    });*/
    ////////
    
    /*this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;
          quote.map(element => {  
            this.pService.getbygroup(element.groupname)
            .pipe(map((data) => { 
              this.gr[flag] = element.groupname;
              this.la[flag] = data;
              flag++;
                return data;
            })
            ).subscribe((data) => {
            })
          });
        return this.pService.getbygroup(this.la).pipe(map(pata => { return pata;}))
      })).subscribe((pata) => {
          console.log(this.gr);
          console.log(this.la);        
    })*/
  }

}
