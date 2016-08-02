import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,  defaultFirebase, FirebaseRef, FirebaseAuth } from 'angularfire2';
import {User} from './../interface/user';
import * as Rx from "rxjs/Rx"


@Injectable()
export class UserAuthService {

  constructor(private af : AngularFire, private fire_auth : FirebaseAuth) {

  }


  own_user_subject = new Rx.ReplaySubject<any>(1)
                      .do((value)=>{console.log("subject do", value)});


  logout = function(){
    this.af.auth.logout();
    this.own_user_subject.next(null);
  }


  get_own_user_subject = function(){
    return this.own_user_subject;
  }

  authentication = function(){
    this.af.auth.login().then((result) => {
      console.log("after login");
      console.log(result);
      let own_user ={
          id:  result.uid,
          name : result.auth.displayName, 
          pict_src : result.auth.photoURL
        }
        this.own_user_subject.next(own_user);
        this.register_user(own_user);
    });
  }

  private register_user = function(user_oj : User){
    let user_obj_db = {
      name : user_oj.name,
      pict_src :user_oj.pict_src
    }
    let user_firebase_ref = this.af.database.object('/users/' + user_oj.id);
    user_firebase_ref.set(user_obj_db);
  }

}

