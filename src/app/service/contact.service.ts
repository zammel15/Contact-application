import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class ContactService {

  constructor(public   http: Http ) { }



  getContact(){
     return this.http.get('http://localhost:8080/Cherchercontacts?mc=A&size=3&page=3').
    map(resp => resp.json());

  }
}
