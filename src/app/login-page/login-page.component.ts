import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fm-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  private email;
  private password;
  
  constructor() { }

  ngOnInit() {
  }

}
