import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private _http:HttpClient) { }


  //newsAPI URL Here
  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=8c52ea29dbed4cc78c537dc861800726";

  //technewsAPI URL Here
  technewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=8c52ea29dbed4cc78c537dc861800726";

  //businessnewsAPI URL Here
  businessnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=8c52ea29dbed4cc78c537dc861800726";

  //topHeading method()

  topHeading():Observable<any>
  {
    return this._http.get(this.newsApiUrl);
  }

  //topNews method()
  techNews():Observable<any>
  {
    return this._http.get(this.technewsApiUrl);
  }

  //businessnews method()
  businessNews():Observable<any>
  {
    return this._http.get(this.businessnewsApiUrl);
  }
}
