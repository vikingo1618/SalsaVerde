import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var GeotabApi: any;

@Injectable()
export class GeotabServiceProvider {

  
  api: any;
  constructor(public http: HttpClient) {
  }

  launchGeotabService(){
    console.log('Injected!\n');
    let server = localStorage.getItem('server');
    console.log('Server: ',server);
    let database = localStorage.getItem('database');
    console.log('Database: ',database);
    let userName = localStorage.getItem('username');
    console.log('Username: ',userName);
    let password = localStorage.getItem('password');

    this.api = GeotabApi(function (authenticationCallback){
      authenticationCallback(server, database, userName,password, function (errorString) {
        console.log('Constructed!');
      });
    });
  }


  getAllDevices (num){
    this.launchGeotabService();
    return new Promise<any[]>((resolve, reject) => {
      this.api.call("Get", {
        "typeName": "Device",
        "resultsLimit" : num
      }, 
      (result) => {
        console.log("Done!\n", result);
        resolve(result);
      });
    });
  }
}
