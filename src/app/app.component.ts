import { Component } from '@angular/core';
import {ChatPcComponent} from './chat-pc/chat-pc.component'
import {HeaderComponent} from './header/header.component'

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ChatPcComponent, HeaderComponent]
})

export class AppComponent {
  title = 'app works!';
}
