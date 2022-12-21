import { DeviceDetectorService } from 'ngx-device-detector';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adsense',
  templateUrl: './adsense.component.html',
  styleUrls: ['./adsense.component.scss']
})
export class AdsenseComponent implements OnInit {

  @Input() isMobileDevice = false;
  @Input() useTable = false;
  @Input() useVerticle = false;

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit() {

    if (this.deviceService.isMobile()) {
      this.isMobileDevice = true;
    }
  }
}
