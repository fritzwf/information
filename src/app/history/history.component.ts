import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';

import { NinjaApiService } from '../ninja-api.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  isMobile = false;
  histNotFound = false;
  hist: any = [];
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

  getHistory(activity: string) {
    if (activity) {
      this.spinner.show();
      this.ninjaService.getHistory(activity).then((result: any) => {
        // console.warn("History: " + JSON.stringify(result));
        this.histNotFound = false;
        if (result) {
          this.hist = result;
        } else {
          this.histNotFound = true;
        }
        this.spinner.hide();
      }).catch((err: any) => {
        console.error("History retrieval failed.");
      });

      // Timeout if the BE gets held up.
      setTimeout(() => {
        this.spinner.hide();
      }, 15000);
    }
  }
}
