import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {
 

  course_data:any;
  myform;
  duration;
  city;
  state;
  fees;
  course_eli;
  dur_list: number[]=[0,1,2,3,4,5,6,7,8,9,10];
  eli_list:string[]=["8th","10th","+2","graduation","masters"];
  divcaseno:number=1;
  citylist: string[] = [];
  statelist: string[] = [];
  constructor(private api: App2ApiService) { 




    //    this.get_city_list();
    this.get_state_list();
    this.myform = new FormGroup(
      {
        duration: new FormControl(""),
        city: new FormControl(""),
        state: new FormControl(""),
        fees: new FormControl(""),
        course_eli: new FormControl("")
        
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
        this.duration = d.duration;
        this.city = d.city;
        this.state = d.state;
        this.fees=d.fees;
        this.course_eli=d.course_eli;
        console.log("duration=" + this.duration);
        console.log("city=" + this.city);
        console.log("state=" + this.state);
        console.log("fees=" + this.fees);
        console.log("course_eli=" + this.course_eli);
       
        let data = { duration: this.duration, city: this.city, state: this.state ,fees:this.fees,course_eli:this.course_eli};
        let url = "http://localhost/project1/filter.php";

        this.api.api1(url, data).subscribe((res: any) => {
          console.log("success==" + res);

          this.course_data=JSON.parse(JSON.stringify(res));
          console.log(this.course_data[0].name);
this.divcaseno=2;
          alert(res);
        },
          (error: any) => {
            console.log("error==" + error)
          });

//          alert("saved function \n duration=" + this.duration + "city=" + this.city + "state=" + this.state + "contact=" );

      }


      ngOnInit() {
      }


  }

  

