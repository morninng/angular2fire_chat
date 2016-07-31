import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/interval';

@Component({
  moduleId: module.id,
  selector: 'app-2-date-pipe',
  templateUrl: '2-date-pipe.component.html',
  styleUrls: ['2-date-pipe.component.css']
})

export class DatePipeComponent implements OnInit {

  clock = Observable.interval(1000).map(()=>{return new Date()})

  clock2 :Observable<Date>;
  click$ = new Subject();

  constructor() {
    this.clock2 = this.click$.map(()=>{return new Date()});
   }
  ngOnInit() {
  }
}
