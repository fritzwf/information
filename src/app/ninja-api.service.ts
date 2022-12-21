import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NinjaApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getCelebrity(person: string): Promise<any> {
    return new Promise((resolve) => {
      if (person) {
        const celebrity = '//tv.feuersoft.com/cgi-bin/get_celebrity.cgi?search=' + person;
        this.http.get(celebrity).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }

  public getCar(car: string): Promise<any> {
    return new Promise((resolve) => {
      if (car) {
        const celebrity = '//tv.feuersoft.com/cgi-bin/get_car.cgi?model=' + car;
        this.http.get(celebrity).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }
}