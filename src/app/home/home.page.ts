import { Component } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  myform;
  name;
  city;
  state;
  email;
  contact;
  citylist: string[] = [];
  statelist: string[] = [];

  constructor(private api: App2ApiService) {
//    this.get_city_list();
    this.get_state_list();
    this.myform = new FormGroup(
      {
        name: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        contact: new FormControl(""),
        email: new FormControl("")
      });
  }



 
  get_state_list() {
    
    console.log("get city list");

    let data = {};
    let url = "http://localhost/project1/getstatelist.php";

    this.api.api1(url, data).subscribe((res: any) => {
      // console.log("success=="+res)
      //alert(res);


      let temp = JSON.stringify(res);
      temp = temp.substring(1, temp.length - 1);

      let temp1 = temp.split(",");

      console.log(temp);
      console.log(temp1.length);
      let i;
      let temp2 = "";
      for (i = 0; i < temp1.length; i++) {
        // alert(temp1[i].toString());
        temp2 = temp1[i].toString();
        temp2 = temp2.substring(1, temp2.length - 1);
        this.statelist.push(temp2);
      }
   



        },
          (error: any) => {
            console.log("error==" + error)
          });


  }


  get_city_list(frm) {
    console.log("get city list-"+frm.state);

    let data = {state:frm.state};
    let url = "http://localhost/project1/getcitylist.php";

    this.api.api1(url, data).subscribe((res: any) => {
      // console.log("success=="+res)
      //alert(res);


      let temp = JSON.stringify(res);
      temp = temp.substring(1, temp.length - 1);

      let temp1 = temp.split(",");

      console.log(temp);
      console.log(temp1.length);
      let i;
      let temp2 = "";
      this.citylist=[];
      for (i = 0; i < temp1.length; i++) {
        // alert(temp1[i].toString());
        temp2 = temp1[i].toString();
        temp2 = temp2.substring(1, temp2.length - 1);
        this.citylist.push(temp2);
      }
   
        },
          (error: any) => {
            console.log("error==" + error)
          });


      }
      abc(d) {
        this.name = d.name;
        this.city = d.city;
        this.state = d.state;
        this.contact = d.contact;
        this.email = d.email;
        console.log("name=" + this.name);
        console.log("city=" + this.city);
        console.log("state=" + this.state);
        console.log("contact=" + this.contact);
        console.log("email=" + this.email);
        let data = { name: this.name, city: this.city, state: this.state, email: this.email, contact: this.contact };
        let url = "http://localhost/project1/app2_php.php";

        this.api.api1(url, data).subscribe((res: any) => {
          console.log("success==" + res)
          alert(res);
          this.name ="";
        this.city = "";
        this.state = "";
        this.contact = '';
        this.email = "";
        },
          (error: any) => {
            console.log("error==" + error)
          });
        alert("saved function \n name=" + this.name + "city=" + this.city + "state=" + this.state + "contact=" + this.contact + "email=" + this.email);


      }

    }
