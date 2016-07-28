import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as Rx from "rxjs/Rx"



import { AngularFire, FirebaseListObservable } from 'angularfire2';




@Component({
  moduleId: module.id,
  selector: 'app-chat-pc',
  templateUrl: 'chat-pc.component.html',
  styleUrls: ['chat-pc.component.css'],

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
*/

  comment_input : string;
  comment_limit_subject = new Rx.Subject<number>();

 
 items: FirebaseListObservable<any[]>;
  constructor( af: AngularFire ) {
     this.items = af.database.list('items', {
      query: {
        limitToLast:this.comment_limit_subject
      }
     });

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
        this.items.push({name: this.comment_input});
        this.comment_input = null;
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
