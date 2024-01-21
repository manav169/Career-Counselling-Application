import { Component, OnInit } from '@angular/core';

import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-collegelist',
  templateUrl: './collegelist.page.html',
  styleUrls: ['./collegelist.page.scss'],
})
export class CollegelistPage implements OnInit {
  //collegelist:string[]=[];
  college_data: any;
  college_id: any;
  div_caseno: number = 1;
  case_value: any;
  profile_id: number = 101;
  rate_list: number[] = [0, 1, 2, 3, 4, 5];
  like_list: string[] = ["Liked", "not liked"];
  rate: number;
  like: string;

  constructor(private api: App2ApiService) { this.get_college_data(); }

  get_college_data() {

    console.log("get college data");

    let data = {};
    let url = "http://localhost/project1/get_college_data.php";

    this.api.api1(url, data).subscribe((res: any) => {
      console.log("success==" + res)
      this.college_data = JSON.parse(JSON.stringify(res));
      //alert(this.college_data[0].name);
      //alert(this.college_data[0].id);
      //     alert(this.college_data);




    },
      (error: any) => {
        console.log("error==" + error)
      });


  }
  get_info(id, caseno) {
    this.div_caseno = 2;
    this.college_id = id;
    this.get_comment();
    this.case_value = caseno;
    console.log("caseno=" + caseno);
    console.log("id=" + id);

  }
  comment: any;
  all_comment_info: any;
  add_comment() {


    console.log("new comment=" + this.comment);
    console.log("new college_id=" + this.college_id);
    console.log("new profile_id=" + this.profile_id);


    let data = { college_id: this.college_id, profile_id: this.profile_id, comment: this.comment };
    let url = "http://localhost/project1/add_comment.php";

    this.api.api1(url, data).subscribe((res: any) => {
      // console.log("success=="+res)
      alert(res);


    },
      (error: any) => {
        console.log("error==" + error)
      });
  }



  get_comment() {



    console.log("new college_id=" + this.college_id);



    let data = { college_id: this.college_id };
    console.log(data);

    let url = "http://localhost/project1/get_comment.php";

    this.api.api1(url, data).subscribe((res: any) => {
      //alert(res);
      this.all_comment_info = JSON.parse(JSON.stringify(res));
      //console.log("comment list=="+this.all_comment_info);

    },
      (error: any) => {
        console.log("error==" + error)
      });


  }
  rate_college() {
    console.log("college id-" + this.college_id + "rate=" + this.rate + "profile_id:" + this.profile_id);

    let data = { college_id: this.college_id, rate: this.rate, profile_id: this.profile_id };
    let url = "http://localhost/project1/rate.php";

    this.api.api1(url, data).subscribe((res: any) => {
      // console.log("success=="+res)
      alert(res);


    },
      (error: any) => {
        console.log("error==" + error)
      });
  }
  like_college() {
    console.log("college id-" + this.college_id + "like=" + this.like + "profile_id:" + this.profile_id);

    let data = { college_id: this.college_id, like: this.like, profile_id: this.profile_id };
    let url = "http://localhost/project1/like.php";

    this.api.api1(url, data).subscribe((res: any) => {
      // console.log("success=="+res)
      alert(res);


    },
      (error: any) => {
        console.log("error==" + error)
      });


  }
  back() {
    this.div_caseno = 1;
  }



  del_comment(id) {
    console.log(id);


    console.log("college id=" + this.college_id);


    let data = { id: id };
    console.log(data);

    let url = "http://localhost/project1/delete_comment.php";

    this.api.api1(url, data).subscribe((res: any) => {
      let caseno = JSON.parse(JSON.stringify(res));
      if (caseno == 1) {

        alert("deleted");
        this.get_comment();
      } else
        alert("error");

      //console.log("comment list=="+this.all_comment_info);

    },
      (error: any) => {
        console.log("error==" + error)
      });

  }
  ngOnInit() {
  }

}
