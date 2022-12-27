import { DeviceDetectorService } from 'ngx-device-detector';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }
}
