import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
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

http://stackoverflow.com/questions/34394708/in-angular-2-0-0-beta-0-map-and-filter-are-missing-from-a-form-inputs-obser
*/

  comment_input : string;
  comment_limit_subject = new Rx.Subject<number>();
  
  chat: FirebaseListObservable<any[]>; 
  chat_query$: FirebaseListObservable<any[]>;
  own_user : User;
  user_data :any = {};
  comment_num = 6;


  constructor( private af: AngularFire, private user_auth : UserAuthService, private user_list_service : UserListService ) {
     this.chat = af.database.list('chat');
     this.chat_query$ = af.database.list('chat', {
      query: {
        limitToLast:this.comment_limit_subject
      }
     })
     this.chat_query$.subscribe((snapshots)=>{
       snapshots.forEach((chat_data) => {
         let userid = chat_data.id;
         user_list_service.retrieve_user(userid);
       })
       this.scrollToBottom();
     })

    const user_sub : Rx.ReplaySubject<any> = user_list_service.get_user_subject_2();
    user_sub.subscribe(
       (in_user_data)=>{
         this.user_data  = in_user_data;
       }
      )

    const own_user_subject$ : Rx.Observable<User> = user_auth.get_own_user_subject();
    own_user_subject$.subscribe(
      (value)=>{
        console.log("own user subscription", value);
        this.own_user = value;
      }
    )

   }
   private scrollToBottom = function(){

    setTimeout(
      ()=>{
        const chatbox_element = document.getElementsByClassName('direct-chat-messages')[0];
        chatbox_element.scrollTop = chatbox_element.scrollHeight;
      },500)

   }
 
   
  ngAfterViewInit(){
    this.comment_limit_subject.next(this.comment_num);

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



    const chatbox_element = document.getElementsByClassName('direct-chat-messages')[0];
    const scroll$ = Rx.Observable.fromEvent(chatbox_element, "scroll")
      .filter( (box_scroll : UIEvent ) => {
        //console.log("scroll top", box_scroll.srcElement.scrollTop);
        //console.log("scroll height", box_scroll.srcElement.scrollHeight);
        if(box_scroll.srcElement.scrollTop == 0){
          return true;
        }else{
          return false;
        }
    })

    scroll$.subscribe(
      ()=>{
        this.comment_num += 3
        this.comment_limit_subject.next(this.comment_num);
      }
    )
  }

  change_num(num){
    console.log("comment num"  , num);
    this.comment_limit_subject.next(parseInt(num, 10));
  }

  ngOnInit() {
  }

}
