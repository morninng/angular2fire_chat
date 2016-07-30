import { Injectable } from '@angular/core';
import * as Rx from "rxjs/Rx"
import {User} from './../interface/user';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class UserListService {


  constructor(private af: AngularFire ) { 

  }

  loadUsers(){
    return this.af.database.object('/users')
    .do((value) => {
      console.log("load user obj");
      console.log(value);
    })
  }


}
