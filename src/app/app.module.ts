import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { Geolocation } from '@ionic-native/geolocation'
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
//import {IonicStorageModule} from '@ionic/storage';//Allows for use of ionic storage for data persistence

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,/*IonicStorageModule.forRoot()*/],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }/*,Calendar,BuildInfo*/],
  bootstrap: [AppComponent],
})
export class AppModule {}
