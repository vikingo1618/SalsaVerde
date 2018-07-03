import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GeotabServiceProvider } from '../../providers/geotab-service/geotab-service';

import { HomePage } from '../home/home';
import { MapPage } from '../map/map';


@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage implements OnInit {

  public devices: any[];
  constructor(public nav: NavController, public navParams: NavParams,
              private geotabServiceProvider : GeotabServiceProvider, 
              private cdRef:ChangeDetectorRef) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad() {
    this.geotabServiceProvider.getAllDevices(10)
    .then((result) => {
      this.devices = result;
      this.cdRef.detectChanges(); 
    });
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('server');
    window.localStorage.removeItem('database');

    this.nav.setRoot(HomePage);
    this.nav.popToRoot();
    window.localStorage.clear();
    console.clear();     
}   

goToMap(){
  this.nav.push(MapPage);
}

}
