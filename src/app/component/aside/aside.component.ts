import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  lgSub = false;
  stkSub = false;
  congSub = false;
  loggedUser;
  constructor(private router: Router) { }

  ngOnInit() {

  }


  redirect() {
  }
}
