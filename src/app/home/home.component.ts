import { DeviceDetectorService } from 'ngx-device-detector';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile = false;
  greeting = true;
  celeb = false;
  cars = false;
  calorie = false;
  hist = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }

  private compInit() {
    this.celeb = false;
    this.cars = false;
    this.greeting = false;
    this.calorie = false;
    this.hist = false;
  }

  celebrity() {
    this.compInit();
    this.celeb = true;
  }

  automotive() {
    this.compInit();
    this.cars = true
  }

  calories() {
    this.compInit();
    this.calorie = true
  }

  history() {
    this.compInit();
    this.hist = true
  }
}
