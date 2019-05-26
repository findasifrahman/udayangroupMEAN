import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private snackBar: MatSnackBar,private router:Router,private lservice: LoginService) { }

  ngOnInit() {
    this.lservice.logout();
    this.snackBar.open('Logged Out Successfully', "Remove", {
      duration: 6000,
      verticalPosition: 'top',
      panelClass: ['blue-snackbar']
    });
    this.router.navigate(["/"]);

  }

}
