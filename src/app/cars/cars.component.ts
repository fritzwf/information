import { NgxSpinnerService } from 'ngx-spinner';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  constructor(
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

}
