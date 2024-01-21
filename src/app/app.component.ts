import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }
  menu_item = [//{ title: "welcome", url: "/welcome", icon: "happy-outline" },
  { title: "Admin Add Colleges", url: "/form1", icon: "happy-outline" },
  { title: "Home", url: "/home", icon: "home-outline" },
  { title: "SignUp/Login", url: "/login", icon: "person-add-outline" },
  { title: "Courses", url: "/courselist", icon: "people-circle-outline" },
  { title: "Career", url: "/career", icon: "arrow-down-outline" },
  { title: "collegelist", url: "/collegelist", icon: "person-circle-outline" },
  { title: "Forget Password", url: "/forgetpass", icon: "key-outline" },
  { title: "College Filters", url: "/filter", icon: "person-outline" },
  { title: "Profile", url: "/profile", icon: "person-outline" },
  { title: "Top Colleges", url: "/topcollege", icon: "receipt-outline" },
  { title: "Contact Us", url: "/contactus", icon: "swap-vertical-outline" },
  { title: "Messages Received", url: "/get-contactus", icon: "swap-vertical-outline" },
  { title: "About Us", url: "/about", icon: "search-outline" }];
}
