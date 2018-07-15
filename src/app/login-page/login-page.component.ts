import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private email;
  private password;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  private goToNewAccount() {
    this.router.navigateByUrl("/new-account");
  }
}
