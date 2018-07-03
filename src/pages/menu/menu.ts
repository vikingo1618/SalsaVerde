import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DevicesPage } from '../devices/devices';
import { HomePage } from '../home/home';
import { MapPage } from '../map/map';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('server');
    window.localStorage.removeItem('database');

    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot();
    window.localStorage.clear();
    console.clear();     
}

goToDevices(){
  this.navCtrl.push(DevicesPage);
}

goToMap(){
  this.navCtrl.push(MapPage);
}
}
