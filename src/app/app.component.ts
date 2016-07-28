import { Component } from '@angular/core';
import {ChatPcComponent} from './chat-pc/chat-pc.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChatPcComponent]
})
export class AppComponent {
  title = 'app works!';
}
