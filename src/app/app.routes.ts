import { provideRouter, RouterConfig }  from '@angular/router';
import { ChatPcComponent } from './chat-pc/chat-pc.component';
import { ObserveAsyncComponent } from './RxjsTest/egghead/1-observe-async/1-observe-async.component';
import { DatePipeComponent } from './RxjsTest/egghead/2-date-pipe/2-date-pipe.component';
import {HomeComponent} from './home/home.component'


const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'chat-pc',
    component: ChatPcComponent
  },
  {
    path: 'egghead_observable_async',
    component: ObserveAsyncComponent
  },
  {
    path: 'egghead_date_pipe',
    component: DatePipeComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];