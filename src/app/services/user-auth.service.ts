import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,  defaultFirebase, FirebaseRef } from 'angularfire2';

@Injectable()
export class UserAuthService {

  own_user : user;

  constructor(private af : AngularFire) {
    
   }

  logout = function(){
    this.af.auth.logout();
    this.own_user = null;
  }


  authentication = function(callback){
    this.af.auth.login().then((result) => {
      console.log("after login");
      console.log(result);
      this.own_user ={
          id:  result.uid,
          name : result.auth.displayName, 
          pict_src : result.auth.photoURL
        }
        console.log(this.own_user);
        callback(this.own_user);
        this.register_user(this.own_user);
    });
  }

  private register_user = function(user_oj : user){

    let user_obj_db = {
      name : user_oj.name,
      pict_src :user_oj.pict_src
    }
    let user_firebase_ref = this.af.database.object('/users/' + user_oj.id);
    user_firebase_ref.set(user_obj_db);
  }


}


export interface user{
  id: string;
  name: string;
  pict_src: string;
}
