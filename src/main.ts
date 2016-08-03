import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { FIREBASE_PROVIDERS, defaultFirebase, firebaseAuthConfig, AuthProviders,AuthMethods  } from 'angularfire2';
import {UserAuthService } from './app/services/user-auth.service'
import { appRouterProviders } from './app/app.routes';


if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent,[
  appRouterProviders,
  FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyAd1FggQh-cpIRcUqHg7RQPrTCj5g-EzSc",
    authDomain: "fir-2practice.firebaseapp.com",
    databaseURL: "https://fir-2practice.firebaseio.com",
    storageBucket: "gs://fir-2practice.appspot.com"
  }),
  firebaseAuthConfig({
    provider: AuthProviders.Facebook,
    method: AuthMethods.Popup
  }),
  UserAuthService
]);
