import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  getCases(){
    return this.http.get('https://corona.lmao.ninja/countries?sort=cases');
  }

}