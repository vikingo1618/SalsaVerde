import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { AuthPage } from '../pages/auth/auth';
import { MenuPage } from '../pages/menu/menu';
import { DevicesPage } from '../pages/devices/devices';

import { GeotabServiceProvider } from '../providers/geotab-service/geotab-service';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { MapPage } from '../pages/map/map';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AuthPage,
    MenuPage,
    DevicesPage,
    MapPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AuthPage,
    MenuPage,
    DevicesPage,
    MapPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GeotabServiceProvider
  ]
})
export class AppModule {}
