import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GeotabServiceProvider } from '../../providers/geotab-service/geotab-service';

import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage implements OnInit {

  constructor(public nav: NavController, public navParams: NavParams,
              private geotabServiceProvider : GeotabServiceProvider ) {
  }

  ngOnInit(){
    this.geotabServiceProvider.getAllDevices(10, function(result){
      console.log('Devices', result);
  },
function(e){
  console.log('Error while retrieveng devices: ', e);
});
  }

  ionViewDidLoad() {
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('server');
    window.localStorage.removeItem('database');

    this.nav.setRoot(HomePage);
    this.nav.popToRoot();         
}   

}
