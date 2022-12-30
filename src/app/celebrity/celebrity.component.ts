import { DeviceDetectorService } from 'ngx-device-detector';
import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';

import { NinjaApiService } from '../ninja-api.service';

const IMDB = "https://www.imdb.com/find?q=";

@Component({
  selector: 'app-celebrity',
  templateUrl: './celebrity.component.html',
  styleUrls: ['./celebrity.component.scss']
})
export class CelebrityComponent implements OnInit {

  isMobile = false;
  celebFound = false;
  celebNotFound = false;
  celeb:any = "";
  celebs: any[] | undefined;
  notFound = "n/a";
  imdbUrl = "";

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

  getCeleb(celebrity: string) {
    this.spinner.show();
    this.ninjaService.getCelebrity(celebrity).then((result: any) => {
      // console.warn("Celeb: " + JSON.stringify(result));
      this.celebNotFound = false;
      this.celebFound = false;
      if (result) {
        this.celeb = result;
        this.imdbUrl = IMDB + result.name;
        this.celebFound = true;
        this.celebs = [result];
      } else {
        this.celebNotFound = true;
      }
      this.spinner.hide();
    }).catch((err: any) => {
      console.error("Celebrity retrieval failed.");
    });

    // Timeout if the BE gets held up.
    setTimeout(() => {
      this.spinner.hide();
    }, 15000);
  }

}
