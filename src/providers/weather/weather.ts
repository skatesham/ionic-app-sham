import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apiKey = '&APPID=d4bfb9a01137535a5fcb5f89ee519d79';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = 'http://api.openweathermap.org/data/2.5/weather?';
  }

  getWheather(city, country){
    let location = "q="+city+','+country
    return this.http.get(this.url+location+this.apiKey);
  }
}
