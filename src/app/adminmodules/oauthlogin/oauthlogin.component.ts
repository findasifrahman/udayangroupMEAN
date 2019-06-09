import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { LoginService } from '../login/login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-oauthlogin',
  templateUrl: './oauthlogin.component.html',
  styleUrls: ['./oauthlogin.component.css']
})
export class OauthloginComponent implements OnInit {

  constructor(private ar:ActivatedRoute,private logservice: LoginService,
    private snackBar: MatSnackBar,private router:Router) {
    this.ar.queryParams.subscribe(params=> {
      console.log('inside oauthlogin');
      const token = params['result'];

      localStorage.setItem("jwt", token);
      console.log(token);
      console.log(this.logservice.getrole());
      this.snackBar.open('Congradulations. Logged In Succesdfull', "Remove", {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['blue-snackbar']
      });
      this.router.navigate(["/clients"]);
    })

  }

  ngOnInit() {
  }

}
