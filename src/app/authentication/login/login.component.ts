import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ContribuableService } from 'src/app/services/contribuable.service';
import { Contribuable } from 'src/app/models/contribuable';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AppService } from '../shared/service/app.service';
import { Principal } from '../shared/model/principal.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  contribuale: Contribuable=new Contribuable();
  errorMessage:string;
  loginForm: FormGroup;
  private principal: Principal;

  credentials = {
    username: '',
    password: ''
  };
  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private contribuableService :ContribuableService,
      private fb: FormBuilder,
              private appService: AppService,
  ) { }
  ngOnInit() {
    
    this.loginForm = this.fb.group({
      
      username: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(3)])]
    });
  }

  login(){

    this.appService.authenticate(this.credentials, ()=>{
      this.router.navigate(['/principal']);
    });
  }
  logout(){
    this.appService.logout(()=>{
      this.router.navigateByUrl('/login');
    });
  }
}
