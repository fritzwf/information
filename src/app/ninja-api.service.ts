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
        const apiURL = '//info.feuersoft.com/cgi-bin/get_celebrity.cgi?search=' + person;
        this.http.get(apiURL).subscribe((data: any) => {
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
        const apiURL = '//info.feuersoft.com/cgi-bin/get_car.cgi?model=' + car;
        this.http.get(apiURL).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }

  public getCalories(activity: string): Promise<any> {
    return new Promise((resolve) => {
      if (activity) {
        const apiURL = '//info.feuersoft.com/cgi-bin/get_calories.cgi?activity=' + activity;
        this.http.get(apiURL).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }

  public getHistory(history: string): Promise<any> {
    return new Promise((resolve) => {
      if (history) {
        const apiURL = '//info.feuersoft.com/cgi-bin/get_history.cgi?history=' + history;
        this.http.get(apiURL).subscribe((data: any) => {
          resolve(data);
        });
      } else {
        resolve(null);
      }
    });
  }
}