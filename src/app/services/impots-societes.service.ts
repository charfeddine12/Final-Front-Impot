import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ImpotsSociete } from '../models/impotsSociete';

@Injectable({
  providedIn: 'root'
})
export class ImpotsSocietesService {


  private uri = 'http://localhost:9099/impotsSocietes/';
  headers = new HttpHeaders();
  constructor(public http: HttpClient) { }

  getAllImpotsSocietes() {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'all', options);
  }

  getImpotsSocieteById(idImpotsSocietes) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.get(this.uri + 'find/' + idImpotsSocietes, options);
  }

  addImpotsSociete(ImpotsSociete) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.post(this.uri + 'add', ImpotsSociete, options);
  }

  updateImpotsSociete(ImpotsSociete) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + 'update', ImpotsSociete, options);
  }

  deleteImpotsSociete(idImpotsSocietes) {
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.delete(this.uri + 'delete/' + idImpotsSocietes, options);
  }
  changeStatus(idImpotsSocietes,status){
    this.headers.append('Accept', 'application/json;charset=UTF-8');
    const options = { headers: this.headers };
    return this.http.put(this.uri + '/updateStatus/' + idImpotsSocietes + '/' +status, options);
  }

}
