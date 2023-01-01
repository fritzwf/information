import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';

import { NinjaApiService } from '../ninja-api.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  isMobile = false;
  carNotFound = false;
  cars: any = [];
  notFound = "n/a";

  constructor(
    private deviceService: DeviceDetectorService,
    private spinner: NgxSpinnerService,
    private ninjaService: NinjaApiService
  ) { }

  ngOnInit() {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }

  getCar(car: string) {
    if (car) {
      this.spinner.show();
      this.ninjaService.getCar(car).then((result: any) => {
        // console.warn("Car: " + JSON.stringify(result));
        this.carNotFound = false;
        if (result) {
          this.cars = result;
        } else {
          this.carNotFound = true;
        }
        this.spinner.hide();
      }).catch((err: any) => {
        console.error("Automative retrieval failed.");
      });

      // Timeout if the BE gets held up.
      setTimeout(() => {
        this.spinner.hide();
      }, 15000);
    }
  }
}
