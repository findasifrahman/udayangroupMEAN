import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { ProductgroupService } from '../productgroup.service';
import { MatTable, MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../../sharedComponentmodules/confirmation-dialog/confirmation-dialog.component';
import { MatSnackBar } from '@angular/material';
import { producgroupmodels } from '../../../models/productgroupmodels';
@Component({
  selector: 'app-productgrouplist',
  templateUrl: './productgrouplist.component.html',
  styleUrls: ['./productgrouplist.component.css']
})
export class ProductgrouplistComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['groupname','buttons'];
  displayedColumnsName: string[] = ['Group Name'];
  AllElement: MatTableDataSource<producgroupmodels>;

  constructor(private snackBar: MatSnackBar, private productService:ProductgroupService, public dialog: MatDialog, public _router: Router) { }
  public doFilter = (value: string) => {
    this.AllElement.filter = value.trim().toLocaleLowerCase();
  }
  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.productService.getAll().subscribe((posts) => {
      this.AllElement = new MatTableDataSource(posts as any);
      this.AllElement.paginator = this.paginator;
      //setTimeout(() => this.AllElement.paginator = this.paginator);
      console.log(posts);
    });
  }
  onDelete(id) {
    console.log("Inside Delete--" + id);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '450px',
      hasBackdrop: true,
      data: "Are you sure you want to delete this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.productService.delete(id).subscribe((posts) => {
          this.AllElement = new MatTableDataSource(posts as any);
          this.AllElement.paginator = this.paginator;
          console.log(posts);

          this.snackBar.open('Data Deleted Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
        },
          error => {
            this.snackBar.open('Unsuccessfull', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          }
        )
      }//if end
    })//dialog ref
  }//Delete end

  onUpdate(id) {
    this._router.navigate(['/productgroupupdate', id]);
  }
}
