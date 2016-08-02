import { Component, OnInit } from '@angular/core';

import * as Rx from "rxjs/Rx"


@Component({
  moduleId: module.id,
  selector: 'app-multicast',
  templateUrl: 'multicast.component.html',
  styleUrls: ['multicast.component.css']
})
export class MulticastComponent implements OnInit {

  multicasted;
  subscription_1 :Rx.Observable<any>;

  constructor() { 

  	const source = Rx.Observable.interval(500);
  	const subject = new Rx.Subject<number>();
    this.multicasted = source.multicast(subject);

    this.subscription_1 = this.multicasted.subscribe(
              (value)=>{console.log(value)},
              (error)=>{console.log(error)},
              ()=>{console.log("completed")}
            );
    const sub_connect = this.multicasted.connect();
  }

  add_subscriptionB(){
    const subscription_B = this.multicasted.subscribe(
      (value)=>{console.log("sub b next", value)},
      (error)=>{console.log("sub b error", error)},
      ()=>{console.log("sub b next completed")}
    )
  }
  unsubscribeA(){
    //this.subscription_1.unsubscribe();
  }

  nsubscribeA_B(){
    
  }


  ngOnInit() {

  }




}
