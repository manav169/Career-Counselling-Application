import { Component, OnInit } from '@angular/core';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.page.html',
  styleUrls: ['./courselist.page.scss'],
})
export class CourselistPage implements OnInit {

  course_data:any;
  constructor(private api:App2ApiService) { this.get_course_data(); }

  get_course_data() {
    
    console.log("get course data");

    let data = {};
    let url = "http://localhost/project1/get_course_data.php";

    this.api.api1(url, data).subscribe((res: any) => {
       console.log("success=="+res)
      this.course_data=JSON.parse(JSON.stringify(res));
      console.log(this.course_data[0].name);
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
