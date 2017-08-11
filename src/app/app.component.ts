import { Component, ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';

import { UserProfilePage } from '../pages/user-profile/user-profile';


import { HomePage } from '../pages/home/home';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import * as firebase from 'firebase/app';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from "angularfire2/auth";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  userList: FirebaseListObservable<any>;
	public fireAuth: any;
  rootPage:any = TabsControllerPage;
  displayName;
  

  constructor(
  platform: Platform, 
  statusBar: StatusBar, 
  af: AngularFireDatabase, 
  splashScreen: SplashScreen, 
  public loadingCtrl: LoadingController, 
  public authService: AuthServiceProvider,
  private afAuth:AngularFireAuth

  ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });

    afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
  
	let loading = this.loadingCtrl.create({
      content: "Load Data...",
      duration: 3000,
      dismissOnPageChange: true
    });
    loading.present();
  this.userList = af.list('/userData');
  
  
  }
  
  goToUserProfile(params){
    if (!params) params = {};
    this.nav.push(UserProfilePage);
  }
  LogOut() {
	let loader = this.loadingCtrl.create({
      content: "Loading",
      duration: 3000
    });
    loader.present();
    this.authService.doLogout();
  }
}
