import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthPage } from './auth';
import { GeotabServiceProvider } from '../../providers/geotab-service/geotab-service';

@NgModule({
  declarations: [
    AuthPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthPage),
  ],
  providers: [
    GeotabServiceProvider
  ]
})
export class AuthPageModule {}
