import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../adminmodules/products/products.service';
import { ProductgroupService } from '../../adminmodules/productsgroup/productgroup.service';
import { map, take,tap,first,flatMap,filter,switchMap } from 'rxjs/operators'
import { Router } from '@angular/router';

import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

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
  la:any[][];// = [];//new Array();//[[],[]];
  gr;//:any = [{}];
  finalarr : any = [];
  changelist(val){
    this.pService.getbygroup(val).subscribe((posts) => {
      this.AllElement = posts;
    });
  }
  proclick(val){
    this.router.navigate(["/productdetail/" + val]);
  }
  uri(ii){
    //console.log(this.mainuri + ii);
    return this.mainuri + ii;
  }
  ngOnInit() {
    this.la = [];
    this.pService.getAll().subscribe((posts) => {
      this.AllElement = posts;
      //console.log(posts);
    });
    this.pgService.getAll().subscribe(posts =>{
      this.gr = posts;
      console.log(this.gr);
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

    this.pgService.getAll().pipe(switchMap((quote: any) => {
          var flag = 0;
          quote.map(element => {
            //this.la = [];
            this.finalarr = [];
            this.pService.getbygroup(element.groupname)
            .pipe(map((data) => {
              this.la[flag] = [];
              data.map((dval)=>{
                console.log(dval["Id"]);

                this.la[flag].push({name: dval["productname"], Id: String(dval["Id"])});
                //console.log(this.la);
              })

              flag++;
              return data;
            })
            ).subscribe((data) => {
              if(quote.length == flag){
                var indexv = 0;
                this.gr.map((laval)=>{
                  var obj = {name: this.gr[indexv].groupname,children:this.la[indexv]};
                  this.finalarr.push(obj);
                  indexv++;
                  if(indexv == this.gr.length){
                    this.dataSource.data = this.finalarr;
                    console.log(this.finalarr);
                  }
                })
              }
            })
          });
        return this.pService.getbygroup(this.la).pipe(map(pata => { return pata;}))
      })).subscribe((pata) => {

    })
    ///

    ////
  }
//

  private transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<ExampleFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  proclicked(val){
    console.log(val);
    this.router.navigate(["/productdetail/" + val]);
    console.log(val);
  }
  groupclicked(val){
    console.log(val);
  }
  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;
//
}
