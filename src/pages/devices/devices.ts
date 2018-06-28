import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GeotabServiceProvider } from '../../providers/geotab-service/geotab-service';


@IonicPage()
@Component({
  selector: 'page-devices',
  templateUrl: 'devices.html',
})
export class DevicesPage {

  constructor(public nav: NavController, public navParams: NavParams,
              public geotabServiceProvider : GeotabServiceProvider ) {
  }

  ionViewDidLoad() {
    this.geotabServiceProvider.getAllDevices(10, function(result){
      console.log('Devices', result);
  },
function(e){
  console.log('Error while retrieveng devices: ', e);
});

  }

}
