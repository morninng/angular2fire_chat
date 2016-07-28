import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { AngularFire, FirebaseListObservable } from './../../../node_modules/angularfire2/angularfire2';


@Component({
  moduleId: module.id,
  selector: 'app-chat-pc',
  templateUrl: 'chat-pc.component.html',
  styleUrls: ['chat-pc.component.css'],

})

export class ChatPcComponent implements OnInit {


 items: FirebaseListObservable<any[]>;
  constructor( af: AngularFire ) {
     this.items = af.database.list('items');
   }
   

  ngOnInit() {
  }

}
