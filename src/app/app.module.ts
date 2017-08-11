import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { UndanganPernikahanPage } from '../pages/undangan-pernikahan/undangan-pernikahan';
import { DataUndanganPage } from '../pages/data-undangan/data-undangan';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { UserProfilePage } from '../pages/user-profile/user-profile';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ResetpwdPage } from '../pages/resetpwd/resetpwd';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';

/*
Initialize firebase by adding firebase config under import section.
*/

export const firebaseConfig = {
  apiKey: "AIzaSyDhY3wRm462JqfCdDQ3GAShFNyOnv792Sw",
  authDomain: "weddingapp-b22a2.firebaseapp.com",
  databaseURL: "https://weddingapp-b22a2.firebaseio.com",
  storageBucket: "weddingapp-b22a2.appspot.com"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    UndanganPernikahanPage,
    DataUndanganPage,
    TabsControllerPage,
    UserProfilePage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
	  HttpModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    UndanganPernikahanPage,
    DataUndanganPage,
    TabsControllerPage,
    UserProfilePage,
    LoginPage,
    RegisterPage,
    ResetpwdPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
  ]
})
export class AppModule {}