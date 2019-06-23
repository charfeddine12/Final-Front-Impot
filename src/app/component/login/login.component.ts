import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  pwd;
  connectionError = false;
  connectedUser;
  user = {
    username: '',
    password: ''
  };
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {

      this.router.navigate(['/login']);
  }

  authentication() {
    this.router.navigate(['/principal']);

  }

  onLogin() {
    this.loginService.login(this.user).subscribe(res => {
      // const jwt = res.headers.get('Authorization');
      console.log('res:', res);
      // this.loginService.saveToken(jwt);
      // this.getRoles(sessionStorage.getItem('token'));
      localStorage.setItem('login', this.user.username);
      // localStorage.setItem('token', jwt);
      localStorage.setItem('role', 'resp');
      this.router.navigateByUrl('/principal');
    },
      err => {
        console.log('error');
      });
  }


}
