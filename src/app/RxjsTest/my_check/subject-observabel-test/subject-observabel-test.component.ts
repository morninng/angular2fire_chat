import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx"


@Component({
  moduleId: module.id,
  selector: 'app-subject-observabel-test',
  templateUrl: 'subject-observabel-test.component.html',
  styleUrls: ['subject-observabel-test.component.css']
})
export class SubjectObservabelTestComponent implements OnInit {

  proxy_obs: Rx.Observable<any>;
  source : Rx.Subject<any>;
  multicasted;

  constructor() {
    const Replay_Subject = new Rx.ReplaySubject(1)
    this.source = new Rx.Subject();
    this.proxy_obs = Rx.Observable.from(this.source)
                        .scan((acc,curr)=>{
                          console.log("scan calculation");
                          return acc + curr;
                        });
    this.multicasted = this.proxy_obs.multicast(Replay_Subject);
    this.multicasted.subscribe(
      (value)=>{
        console.log("constructor subscribed value", value)
      }
    )

    const SubConnect = this.multicasted.connect();
   }

  ngOnInit() {
  }


  event1(){
    console.log("event1");
    this.source.next("event1");
  }


  event2(){
    console.log("event2");
    this.source.next("event2");
  }

  second_subscribe(){
    this.multicasted.subscribe(
      (value)=>{
        console.log("button click subscribed value", value)
      }
    )
  }


}
