import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/startWith';

@Component({
  moduleId: module.id,
  selector: 'app-4-sratwith-scan',
  templateUrl: '4-sratwith-scan.component.html',
  styleUrls: ['4-sratwith-scan.component.css']
})
export class SratwithScanComponent implements OnInit {

  clock2 :Observable<any>;
  click$ = new Subject();

  constructor() {
    this.clock2 = this.click$.startWith(new Date())
                      .scan((acc : Date ,curr : Date) =>{
                        const date = new Date(acc.getTime());
                        date.setSeconds(date.getSeconds() +1); 
                        return date;
                      })
   }



  ngOnInit() {
  }

}
