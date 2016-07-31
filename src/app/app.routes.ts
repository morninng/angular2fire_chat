import { provideRouter, RouterConfig }  from '@angular/router';
import { ChatPcComponent } from './chat-pc/chat-pc.component';


const routes: RouterConfig = [
  {
    path: 'chat-pc',
    component: ChatPcComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];