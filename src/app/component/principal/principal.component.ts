import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Principal } from 'src/app/authentication/shared/model/principal.model';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  private principal: Principal;

  constructor( private router: Router) { }

  ngOnInit() {
    console.log("principalprincipal",this.principal);

  }

}
