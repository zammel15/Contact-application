import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map' ;
import {ContactService} from "../service/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
pageContacts: any;
  constructor(public  http: Http , public contactService: ContactService) {
  }


  ngOnInit() {
    this.contactService.getContact().
      subscribe(data => {
        this.pageContacts = data ;
    }, err => {
        console.log(err);

    }
    );

  }

}
