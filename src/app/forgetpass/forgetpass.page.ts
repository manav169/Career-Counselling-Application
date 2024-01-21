import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.page.html',
  styleUrls: ['./forgetpass.page.scss'],
})
export class ForgetpassPage implements OnInit {

  myform;
  caseno:number=1;
userid:number;
  constructor(private api:App2ApiService) {
    this.myform = new FormGroup({
      
        cnt1: new FormControl(""),
        cnt2: new FormControl(""),
    });
  }

  fpass(d)
  {
 console.log(d.cnt1);
 //   console.log(d.cnt1);


 let data;
 if(this.caseno==1)
 data = { cnt1: d.cnt1, caseno: this.caseno}
 else if(this.caseno==2 ||this.caseno==3)
 data = { cnt1: d.cnt1, caseno: this.caseno,id:this.userid}

 
 
 let url = "http://localhost/project1/forgetpass.php";

 console.log(data);
 this.api.api1(url, data).subscribe((res: any) => {
   
   let res_value =parseInt(JSON.parse( JSON.stringify(res)));
//alert(res);



if(this.caseno==1)
{

if(res_value>0)
{this.caseno =this.caseno+1; this.userid=res_value;}
else if(res_value==0)
alert(d.cnt1+" User not found");
else if(res_value==-1)
alert(d.cnt1+" User name can not be Empty");

}
else if(this.caseno==2)
{
  if(res_value==1)
  this.caseno =this.caseno+1;
  else
  alert(" OTP MISS MATCH");

}
else if(this.caseno==3)
{
  if(res_value==1)
  {alert(" password updated");
this.caseno=1;
}else
  alert(" query error");
}


//   alert(res);
 },
   (error: any) => {
     console.log("error==" + error)
   });




  }

  ngOnInit() {
  }

}
