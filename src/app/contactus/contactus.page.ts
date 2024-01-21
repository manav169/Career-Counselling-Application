import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { App2ApiService } from '../app2-api.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.page.html',
  styleUrls: ['./contactus.page.scss'],
})
export class ContactusPage implements OnInit {
  myform;

  constructor(private api: App2ApiService) {

    this.myform = new FormGroup(
      {
        email: new FormControl(""),
        contact: new FormControl(""),
        message: new FormControl("")
      });
  }

  contact(d) {
    console.log(d.email);
    console.log(d.contact);
    console.log(d.message);

    let data = { email: d.email, contact: d.contact, message: d.message };
    let url = "http://localhost/project1/contactus.php";

    this.api.api1(url, data).subscribe((res: any) => {
      console.log("success==" + res)
      alert(res);
    },
      (error: any) => {
        console.log("error==" + error)
      });

  }

  ngOnInit() {
  }

}
