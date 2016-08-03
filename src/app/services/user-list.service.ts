import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx"
import {User} from './../interface/user';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserListService {


  userlist = {};

  //test_sub = new Rx.ReplaySubject()
  //src_sub = new Rx.Subject();
  //proxy_obs = Rx.Obesrvable.from(src_sub);

  private source : Rx.Subject<any>
  // http://stackoverflow.com/questions/20627138/typescript-this-scoping-issue-when-called-in-jquery-callback
  //Replay_Subject : Rx.ReplaySubject<any>;
  proxy_obs : Rx.Observable<any>;

  constructor(private af: AngularFire  ) {

    //this.Replay_Subject = new Rx.ReplaySubject(1);
    this.source = new Rx.Subject();
    this.proxy_obs = Rx.Observable.from(this.source)
              .startWith(null)
              .scan((acc, curr :User)=>{
                if( curr == null && acc == null ){
                  return {}
                }
                if(curr == null && acc){
                  return acc;
                }
                if(acc == null && !curr.id){
                  return {};
                }
                if(acc == null && curr.id){
                  let obj = {};
                  obj[curr.id] =  {
                    name: curr.name,
                    pict_src : curr.pict_src
                  }
                  return obj;
                 }
                if(!curr.id || acc[curr.id]){
                  return acc;
                }else{
                  let obj = {
                    name: curr.name,
                    pict_src : curr.pict_src
                  }
                  acc[curr.id] = obj;
                  return acc;
                }
              })
 
  }

  get_user_subject_2 = function(){
    return this.proxy_obs;
  }

  retrieve_user = function(userid:string){

    const that = this;
    if(this.userlist[userid]){
      return;
    }
    this.af.database.object('/users/' + userid)
      .subscribe(
        (user_obj) =>{
           let user_data :User = {
             id: user_obj.$key,
             name: user_obj.name,
             pict_src: user_obj.pict_src
           }
           that.source.next(user_data);

        }
      )
  }
}

