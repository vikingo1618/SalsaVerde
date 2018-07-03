import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
  
import { AuthPage } from '../auth/auth';
  
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
    username: string;
  
    constructor(public nav: NavController) {
        this.nav = nav;
        this.username = window.localStorage.getItem('username');
    }
 
    goToAuthenticationPage() { 
        this.nav.push(AuthPage);         
    }    
}