import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-get-contactus',
  templateUrl: './get-contactus.page.html',
  styleUrls: ['./get-contactus.page.scss'],
})
export class GetContactusPage implements OnInit {

contact_list:any;

  constructor(private api:App2ApiService) { 

    let data={};
    let url="http://localhost/project1/get-contactus.php";

    
    this.api.api1(url, data).subscribe((res: any) => {
      console.log("success=="+res)
    this.contact_list=JSON.parse(JSON.stringify(res));
//    console.log(this.contact_list[1].email);

       },
         (error: any) => {
           console.log("error==" + error)
         });

  }

  ngOnInit() {
  }

}
