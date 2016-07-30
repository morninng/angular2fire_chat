import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,  defaultFirebase, FirebaseRef } from 'angularfire2';
import {UserAuthService , user} from './../services/user-auth.service'

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  providers: [UserAuthService]
})
export class HeaderComponent implements OnInit {

  own_user : user;
  constructor( private user_auth : UserAuthService) {
  }

  ngOnInit() {
  }

  login(){
    console.log("login button is clicked");
    this.user_auth.authentication((own_user)=>{
      this.own_user = own_user
    });
  }

  logout(){
    console.log("logout button is clicked");
    this.user_auth.logout();

  }


/* https://angularfire2.com/api/ */
  
  

}
