import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
 
import { HomePage } from '../home/home';
 
import { MenuPage } from '../menu/menu';

@IonicPage()
@Component({
  selector: 'page-auth',
  templateUrl: 'auth.html',
})
 
export class AuthPage {
 
    authForm: FormGroup;
 
    constructor(public nav: NavController, public navParams: NavParams, 
                public formBuilder: FormBuilder) {
 
        this.nav = nav;
 
        this.authForm = formBuilder.group({
            username: ['zombie.robot33@gmail.com    ', Validators.compose([Validators.required])],
            password: ['.g30t4b.1618', Validators.compose([Validators.required])],
            server: ['my524.geotab.com', Validators.compose([Validators.required])],
            database:['Drakkar',Validators.compose([Validators.required])]
        });
    }
 
    onSubmit(value: any): void { 
        if(this.authForm.valid) {
            window.localStorage.setItem('username', value.username);
            window.localStorage.setItem('password', value.password);
            window.localStorage.setItem('server', value.server);
            window.localStorage.setItem('database', value.database);
            this.nav.push(MenuPage);
        }
        else{
            this.nav.push(HomePage);
        }
    }   
}