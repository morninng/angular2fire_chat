import { provideRouter, RouterConfig }  from '@angular/router';
import { ChatPcComponent } from './chat-pc/chat-pc.component';
import { ObserveAsyncComponent } from './RxjsTest/egghead/1-observe-async/1-observe-async.component';
import { DatePipeComponent } from   './RxjsTest/egghead/2-date-pipe/2-date-pipe.component';
import {SratwithScanComponent} from './RxjsTest/egghead/4-sratwith-scan/4-sratwith-scan.component';
import {SubjectObservabelTestComponent} from './RxjsTest/my_check/subject-observabel-test/subject-observabel-test.component'
import {MulticastComponent} from './RxjsTest/my_check/multicast/multicast.component';
import {FromMultipleButtonsComponent} from './RxjsTest/my_check/from-multiple-buttons/from-multiple-buttons.component'
import {HomeComponent} from './home/home.component'

import {DragDropComponent} from './RxjsTest/Lig_sample/drag-drop/drag-drop.component';

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
  },
  {
   path: "egghead_startwith_scan",
   component: SratwithScanComponent
  },
  {
    path: "from_multiple_botton",
    component: FromMultipleButtonsComponent
  },
  {
    path: "subject_observable_test",
    component: SubjectObservabelTestComponent
  },
  {
    path: "multicast",
    component: MulticastComponent
  },
  {
    path: "Lig_drag_drop",
    component: DragDropComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];