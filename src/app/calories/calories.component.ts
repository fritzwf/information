import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';

import { NinjaApiService } from '../ninja-api.service';

@Component({
  selector: 'app-calories',
  templateUrl: './calories.component.html',
  styleUrls: ['./calories.component.scss']
})
export class CaloriesComponent implements OnInit {

  isMobile = false;
  calsNotFound = false;
  cals: any = [];
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

  getCalories(activity: string) {
    if (activity) {
      this.spinner.show();
      this.ninjaService.getCalories(activity).then((result: any) => {
        // console.warn("Calories: " + JSON.stringify(result));
        this.calsNotFound = false;
        this.cals = [];
        if (result) {
          this.cals = result;
          this.calsNotFound = result.length ? false : true;
        }
        this.spinner.hide();
      }).catch((err: any) => {
        console.error("Calories retrieval failed.");
      });
    }

    // Timeout if the BE gets held up.
    setTimeout(() => {
      this.spinner.hide();
    }, 15000);
  }
}
