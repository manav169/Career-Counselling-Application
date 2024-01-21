import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-career',
  templateUrl: './career.page.html',
  styleUrls: ['./career.page.scss'],
})
export class CareerPage implements OnInit {
  career_data:any;
  div_caseno:number=1;
 aim_id:number;
  constructor(private api:App2ApiService) { this.get_career_data(); }

  get_aim_info(temp_id)
  {
    this.div_caseno=2;
this.aim_id=temp_id;


let data = {};
let url = "http://localhost/project1/get_career.php";

this.api.api1(url, data).subscribe((res: any) => {
   console.log("success=="+res)
  this.career_data=JSON.parse(JSON.stringify(res));
  //console.log(this.career_data[0].aim);

    },
      (error: any) => {
        console.log("error==" + error)
      });

      

  }
  get_career_data() {
    
  

    let data = {};
    let url = "http://localhost/project1/get_career.php";

    this.api.api1(url, data).subscribe((res: any) => {
       console.log("success=="+res)
      this.career_data=JSON.parse(JSON.stringify(res));
      //console.log(this.career_data[0].aim);

        },
          (error: any) => {
            console.log("error==" + error)
          });


  }


  ngOnInit() {
  }

}
