import { AdsenseModule } from 'ng2-adsense';
import { DeviceDetectorModule } from 'ngx-device-detector';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AdsenseComponent } from './adsense/adsense.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CelebrityComponent } from './celebrity/celebrity.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MeterToFeetPipe } from './meter-to-feet.pipe';
import { CaloriesComponent } from './calories/calories.component';
import { InflationComponent } from './inflation/inflation.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    AdsenseComponent,
    CarsComponent,
    CelebrityComponent,
    HeaderComponent,
    MeterToFeetPipe,
    HomeComponent,
    CaloriesComponent,
    InflationComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdsenseModule,
    NgxSpinnerModule,
    FormsModule,
    HttpClientModule,
    // shown passing global defaults (optional)
    AdsenseModule.forRoot({
      adClient: 'ca-pub-3352789819896964',
      adSlot: 2238911066,
    }),
    DeviceDetectorModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
