import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contribuable } from '../models/contribuable';

@Injectable({
  providedIn: 'root'
})
export class ContribuableService {

  private uri = 'http://localhost:9099/contribuables/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }

  getAllContribuable() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'all', options);
  }

  public logIn(user) {

     this.headers = new HttpHeaders(user ? {
      authorization: 'Basic ' + btoa(user.username + ':' + user.password)
    } : {});
   // this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    return this.http.post('http://localhost:9099/contribuables/login/'
    +user.login+'/'+user.password , { headers: this.headers });

  }

  getContribuableById(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idCategorie, options);
  }

  addContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', categorie, options);
  }

  updateContribuable(categorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', categorie, options);
  }

  deleteContribuable(idCategorie) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idCategorie, options);
  }
  authentication(login, pwd) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'authentication/' + login + '/' + pwd, options);
  }

  getByLogin(login) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    console.log("login login", login)

    return this.http.get(this.uri + 'findByLogin/' + login, options);
  }

  getByLoginAndEmail(login, email) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'get-by-email-login/' + login + '/' + email, options);
  }

  getCode(): Observable<any> {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'getcode', options);
  }
}
