import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DataUndanganPage } from '../data-undangan/data-undangan';


@Component({
  selector: 'page-undangan-pernikahan',
  templateUrl: 'undangan-pernikahan.html'
})
export class UndanganPernikahanPage {

  constructor(public navCtrl: NavController) {
  }
   Next(params){
    if (!params) params = {};
    this.navCtrl.push(DataUndanganPage);
}
}
