import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*' })
};

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private uri = 'http://localhost:9099/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }



  login(user) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    this.headers.append('Access-Control-Allow-Origin', '*');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'login', user);
  }
}
