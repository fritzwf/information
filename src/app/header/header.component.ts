import { DeviceDetectorService } from 'ngx-device-detector';

import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges, OnInit {

  isMobile = false;

  constructor(
    private deviceService: DeviceDetectorService
  ) { }

  ngOnInit(): void {
    if (this.deviceService.isMobile()) {
      this.isMobile = true;
    }
  }

  ngOnChanges(changes: any) {
    console.log(changes.celebrity);
  }
}
