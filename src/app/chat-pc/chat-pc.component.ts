import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Rx from "rxjs/Rx"
import {UserAuthService } from './../services/user-auth.service'
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import {UserListService} from './../services/user-list.service';
import {User} from './../interface/user';

@Component({
  moduleId: module.id,
  selector: 'app-chat-pc',
  templateUrl: 'chat-pc.component.html',
  styleUrls: ['chat-pc.component.css'],
  providers: [UserListService]
})

export class ChatPcComponent implements OnInit, AfterViewInit {


/*
 ブロックコメントを import文の横におくとエラーになるのでここに
http://stackoverflow.com/questions/38586182/angular2-rc4-xhr-error-404-not-found-loading-traceur
http://stackoverflow.com/questions/37179236/angular2-error-at-startup-of-the-app-http-localhost3000-traceur-404-not-fo

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent'
import 'rxjs/operator/map';
import 'rxjs/operator/filter';
http://stackoverflow.com/questions/34394708/in-angular-2-0-0-beta-0-map-and-filter-are-missing-from-a-form-inputs-obser
*/
/*
constructor(){};
ngAfterViewInit(){};
ngOnInit() {}
*/

  comment_input : string;
  comment_limit_subject = new Rx.Subject<number>();


  
  chat: FirebaseListObservable<any[]>; 
  chat_query: FirebaseListObservable<any[]>; 
  user_list_obj$: Rx.Observable<any>;
  own_user_subject$ : Rx.Observable<User>;
  own_user : User;
  user_data :any;

  constructor( private af: AngularFire, private user_auth : UserAuthService, private user_list : UserListService ) {
     this.chat = af.database.list('chat');
     this.chat_query = af.database.list('chat', {
      query: {
        limitToLast:this.comment_limit_subject
      }
     });

     user_list.loadUsers()
      .subscribe(
        (res)=>{
          this.user_data = res;
        },
        (error)=>{console.log(error);},
        ()=>{console.log("completed")}
      );

    this.own_user_subject$ = user_auth.get_own_user_subject();
    this.own_user_subject$.subscribe(
      (value)=>{
        console.log("osn user subscription", value);
        this.own_user = value;
      }
    )
   }
 
   
  ngAfterViewInit(){
    this.comment_limit_subject.next(3);


    const comment_element = document.getElementById("chat_comment_input").getElementsByTagName("input")[0];
    const comment_input$ = Rx.Observable.fromEvent(comment_element, "keyup")
      .map((res: KeyboardEvent)=>{
      console.log(res.keyCode);
      return res.keyCode;}
      )
      .filter((value)=>{return value==13;})

    comment_input$.subscribe(
      (value)=>{
        console.log(value);
        console.log(this.comment_input);

        if(!this.own_user){
          alert("you need to login to comment on a chat");
          return;
        }else{
          this.chat.push({id:this.own_user.id, body: this.comment_input});
          this.comment_input = null;
        }
      },
      (error)=>{
        console.log(error)
      },
      ()=>{
        console.log("completed")
      }
    );
  }


  change_num(num){
    console.log("comment num"  , num);
    this.comment_limit_subject.next(parseInt(num, 10));
  }

  ngOnInit() {
  }

}
