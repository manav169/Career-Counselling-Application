import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.page.html',
  styleUrls: ['./form1.page.scss'],
})
export class Form1Page implements OnInit {
  myform;
  course;
  course_code;
  collegename;
  collegelist:string[]=[];
  course_eli;
  course_fee;
  duration;
  eli_list:string[]=["8th","10th","+2","graduation","masters"];

  dur_list:number[]=[1,2,3,4,5,6,7,8,9,10];

  constructor(private api: App2ApiService) { this.get_college_list();
  
    this.myform = new FormGroup(
      {
        course: new FormControl(""),
        course_code: new FormControl(""),
        collegename: new FormControl(""),
        course_eli: new FormControl(""),
        course_fee: new FormControl(""),
        duration: new FormControl("")
      });

  }
  
  
  
  
  
  get_college_list() {
    
    console.log("get city list");

    let data = {};
    let url = "http://localhost/project1/get_college_list.php";

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
       this.collegelist.push(temp2);
      }
   



        },
          (error: any) => {
            console.log("error==" + error)
          });


  }

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  submit(d)
  { 
    this.course=d.course;
    this.course_code=d.course_code;
    this.collegename=d.collegename;
    this.course_eli=d.course_eli;
    this.course_fee=d.course_fee;
    this.duration=d.duration;
    console.log("course name=="+this.course);
    console.log("course code=="+this.course_code);
    console.log("collegename =="+this.collegename);
    console.log("course eligibility =="+this.course_eli);
    console.log("course fee =="+this.course_fee);
    console.log("duration =="+this.duration);
    let data = {collegename:this.collegename,course_code: this.course_code, course: this.course , course_eli: this.course_eli, course_fee: this.course_fee, duration:this.duration };
    let url = "http://localhost/project1/insert_new_course.php";

    this.api.api1(url, data).subscribe((res: any) => {
      console.log("success==" + res)
      alert(res);
    },
      (error: any) => {
        console.log("error==" + error)
      });
    alert("saved function \n course_code= " + this.course_code + "course name=" + this.course +"course eligibility =="+this.course_eli+"course fee =="+this.course_fee + "course duration == "+this.duration );

  }




  ngOnInit() {
  }

}
