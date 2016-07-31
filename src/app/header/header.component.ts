import { Component, OnInit, Inject } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,  defaultFirebase, FirebaseRef } from 'angularfire2';
import {UserAuthService } from './../services/user-auth.service';
import {User} from './../interface/user';
import * as Rx from "rxjs/Rx";
import {ROUTER_DIRECTIVES} from'@angular/router'


@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  own_user : User;
  own_user_subject$ : Rx.Observable<User>;

  constructor( private user_auth : UserAuthService) {

    this.own_user_subject$ = user_auth.get_own_user_subject();
    this.own_user_subject$.subscribe(
      (value)=>{
        console.log("osn user subscription", value);
        this.own_user = value;
      }
    )

  }

  ngOnInit() {
  }

  login(){
    console.log("login button is clicked");
    this.user_auth.authentication();
  }

  logout(){
    console.log("logout button is clicked");
    this.user_auth.logout();
  }


/* https://angularfire2.com/api/ */
  
  

}
