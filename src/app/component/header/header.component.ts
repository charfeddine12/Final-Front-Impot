import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedUser;

  constructor(private router: Router) { }

  ngOnInit() {
    const login = localStorage.getItem('login');
  }

  logout() {
    localStorage.removeItem('login'); 
    localStorage.removeItem('connected');
    this.router.navigate(['/login']);
  }

}
