import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loginUser(e) {
  	e.preventDefault();
  	console.log(e);
  	var username = e.target.elements[0].value;
  	var password = e.target.elements[1].value;
  	console.log(username);
  	console.log(password);
  	/*if(username == 'admin' && password == 'admin') {
      this.user.setUserLoggedIn();
  		this.router.navigate(['dashboard']);*/
  	}

}
