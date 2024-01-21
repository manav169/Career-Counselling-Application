import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-topcollege',
  templateUrl: './topcollege.page.html',
  styleUrls: ['./topcollege.page.scss'],
})
export class TopcollegePage implements OnInit {

  college_data:any;
  constructor(private api:App2ApiService) { this.get_college_data(); }

  get_college_data() {
    
    console.log("get college data");

    let data = {};
    let url = "http://localhost/project1/get_college_data.php";

    this.api.api1(url, data).subscribe((res: any) => {
       console.log("success=="+res)
      this.college_data=JSON.parse(JSON.stringify(res));
//alert(this.college_data[0].name);
//alert(this.college_data[0].id);
 //     alert(this.college_data);


  

        },
          (error: any) => {
            console.log("error==" + error)
          });


  }


  ngOnInit() {
  }

}
