import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';

@Component({
  moduleId: module.id,
  selector: 'app-1-observe-async',
  templateUrl: '1-observe-async.component.html',
  styleUrls: ['1-observe-async.component.css']
})
export class ObserveAsyncComponent implements OnInit {

/* https://egghead.io/lessons/angular-2-rendering-an-observable-with-the-async-pipe?course=building-a-time-machine-with-angular-2-and-rxjs */ 

  clock$ :Observable<number>;
  clock :number;

  constructor() {

    this.clock$ = Observable.interval(1000);
    
    this.clock$.subscribe(
      (value)=>{
        console.log(value);
        this.clock = value;
        }
    )
   }

  ngOnInit() {
  }

}
