import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { App2ApiService } from '../app2-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  x:number=1;
  data:any;
  myform;
  user_name;
  password;
  usertype;
  phone;

  type_list: string[] = ["student", "employee"];

  constructor(private api: App2ApiService) {

    this.myform = new FormGroup(
      {
        user_name: new FormControl(""),
        user_password: new FormControl(""),
        user_type: new FormControl(""),
        phone: new FormControl(""),
        email: new FormControl(""),
        otp: new FormControl("")
        

      });
  }

  login(d) {
    if(this.x==1)
    {
    console.log("<br/>username=" + d.user_name);
    console.log("<br/>password=" + d.user_password);
    console.log("<br/>type=" + d.user_type);

    this.data = { username: d.user_name, password: d.user_password, usertype: d.user_type,x:this.x }
    }
    else if(this.x==2)
    {
      console.log("<br/>phone number=" + d.phone);
     this.phone=d.phone;

      this.data = {phone:d.phone,x:this.x }
    }
    else if(this.x==3)
    {
      console.log("<br/>otp=" + d.otp);
      console.log("<br/>phone number=" + this.phone);
    

      this.data = {otp:d.otp,x:this.x,phone:this.phone }
    }
    else if(this.x==4)
    {
      console.log("<br/>username=" + d.user_name);
      console.log("<br/>password=" + d.user_password);
      console.log("<br/>email=" + d.email);
      console.log("<br/>type=" + d.user_type);

      this.data = { username: d.user_name, password: d.user_password, usertype: d.user_type, email:d.email,phone:this.phone,x:this.x}
    }
    

    let url = "http://localhost/project1/login.php";

    console.log(this.data);
    this.api.api1(url, this.data).subscribe((res:any) => {
      //let res_value =parseInt(JSON.parse( JSON.stringify(res)));
      
      console.log("success==" + res)
      alert(res);
      if(this.x==2){
        alert("OTP is "+res);
        this.x++;
      }
      else if(this.x==3)
    {
        if(res!=1)
        { 
          alert("Incorrect OTP")
          
        }
        else{
        alert("number confirmed");
        this.x++;
      }
    }
      else if(this.x==4)
      {
        alert("Signed up. Please Log in");
        this.x=1;
      }
      else{

        alert("LOGGED IN");
      }

    },
      (error: any) => {
        console.log("error==" + error)
      });


  }

  
  bt2()
  {
    this.x+=1;
  } 
  back()
  {
    this.x=1;
  }
  ngOnInit() {
  }

}
