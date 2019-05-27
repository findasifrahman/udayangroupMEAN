import { Component, OnInit, Input, OnChanges, Output,EventEmitter } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';



interface ProductsNode {
  name: string;
  id: string;
  children?: ProductsNode[];
}
interface mainFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}
@Component({
  selector: 'app-mattree',
  templateUrl: './mattree.component.html',
  styleUrls: ['./mattree.component.css']
})
export class MattreeComponent implements OnInit,OnChanges {
  @Input() datasourceval:any;
  @Output() parentClicktemit = new EventEmitter<any>();
  @Output() childClickemit = new EventEmitter<any>();
  constructor() { }

  groupByList(val){
    this.parentClicktemit.emit(val);
  }
  productsclick(val){
    this.childClickemit.emit(val);
    //this.router.navigate(["/productdetail/" + val]);
  }
  ngOnInit() {
  }
  ngOnChanges(){
    this.dataSource.data = this.datasourceval;
    console.log(this.datasourceval);
  }
  private transformer = (node: ProductsNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      id:node.id,
      level: level,
    };
  }

  treeControl = new FlatTreeControl<mainFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this.transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: mainFlatNode) => node.expandable;
}
