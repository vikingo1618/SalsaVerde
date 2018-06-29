import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var GeotabApi: any;

@Injectable()
export class GeotabServiceProvider {

  
  api: any;
  constructor(public http: HttpClient) {
    console.log('Injected!\n');
    let server = window.localStorage.getItem('server');
    console.log('Server: ',server);
    let database = window.localStorage.getItem('database');
    console.log('Database: ',database);
    let userName = window.localStorage.getItem('username');
    console.log('Username: ',userName);
    let password = window.localStorage.getItem('password');
    console.log('Password: ',password);

    this.api = GeotabApi(function (authenticationCallback){
      authenticationCallback(server, database, userName,password, function (errorString) {
        console.log("Error: ", errorString);
      });
    });
  }


  getAllDevices (num, devicesCallback, onerror){
    this.api.call("Get", {
      "typeName": "Device",
      "resultsLimit" : num
    }, 
    function(result){
      console.log("Done!\n", result);
      devicesCallback(result);
    }, 
    function(e){
      console.error("Failed!\n", e);
      onerror(e);
    });
  }

}
