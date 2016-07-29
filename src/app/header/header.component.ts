import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  userlogin : boolean;
  username : string;
  constructor() {

  }


  ngOnInit() {
    this.userlogin = false;
  }

  login(){
    console.log("login button is clicked");
  }
  

}
