import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RequestOptions } from '@angular/http';
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/map'

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {
  baseUrl:string = 'http://test.cogitate.us/IntvAPI/api';

  constructor(private http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getOrders() {
    // let headers = new HttpHeaders();
    // headers.append("Access-Control-Allow-Origin", "*");
    // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // headers.append('Content-Type','application/json; charset=utf-8');
    // headers.append('Accept','application/json');
    return this.http.get(this.baseUrl + '/Orders')
    .do((res: Response) => console.log(res))
    .map((res: Response) => res.json());
  }

 }
