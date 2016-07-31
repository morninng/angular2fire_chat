import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx"
import {User} from './../interface/user';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserListService {

  userlist_replay_subj = new Rx.ReplaySubject(1);
  userlist = {};

  constructor(private af: AngularFire ) {

  }

  get_user_subject = function(){
    return this.userlist_replay_subj;
  }

  retrieve_user = function(userid:string){

    if(this.userlist[userid]){
      return;
    }
    this.af.database.object('/users/' + userid)
      .subscribe(
        (user_obj) =>{
           let user_id = user_obj.$key;
          if(this.userlist[user_id]){
            return;
          }else{
            this.userlist[user_id] = {
              name : user_obj.name,
              pict_src : user_obj.pict_src
            }
            this.userlist_replay_subj.next(this.userlist);
          }
        }
      )

  }



}
