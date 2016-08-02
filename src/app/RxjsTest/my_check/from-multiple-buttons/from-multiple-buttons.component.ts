import { Component, OnInit } from '@angular/core';
import * as Rx from "rxjs/Rx"

@Component({
  moduleId: module.id,
  selector: 'app-from-multiple-buttons',
  templateUrl: 'from-multiple-buttons.component.html',
  styleUrls: ['from-multiple-buttons.component.css']
})
export class FromMultipleButtonsComponent implements OnInit {

  source_A : Rx.Subject<any>;
  source_B : Rx.Subject<any>;
  
  constructor() {
    this.source_A = new Rx.Subject();
    this.source_B = new Rx.Subject();
    const src_A = Rx.Observable.from(this.source_A)
                    .map((value)=>{return value +'--' });
    const src_B = Rx.Observable.from(this.source_B);
    const merged_src = Rx.Observable.merge(src_A, src_B)
                        .map((value)=>{ return value + '||||'});

    merged_src.subscribe(
      (value)=>{
        console.log("subscribe", value);
      },
      (error)=>{
        console.log(error)
      },
      ()=>{
        console.log("completed")
      }
    )

  }

  ngOnInit() {

  }




  event1_A(){
    console.log("event1 sourceA");
    this.source_A.next("event1 A");
  }

  event2_A(){
    console.log("event2 sourceA");
    this.source_A.next("event2 A");
  }


  event3_B(){
    console.log("event3 sourceB");
    this.source_B.next("event3 B");
  }

  event4_B(){
    console.log("event4 sourceB");
    this.source_B.next("event4 B");
  }

}
