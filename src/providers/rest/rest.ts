import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';
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
    .do(this.logResponse)
    .map(this.extractData)
    // .catch(this.handleError);
    // .subscribe(res => console.log(res));
        // .subscribe(res => <any>res)
    //         .catch(this.handleError);
  }

  getProducts() {
    return this.http.get(this.baseUrl + '/Products')
    .do(this.logResponse)
    .map(this.extractData)
    // .catch(this.handleError);
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res;
  }

  // private handleError(error) {
  //   console.error(error);
  //   return Observable.throw("Error in x service");
  //   //  Observable.throw(error || 'Server error');
  // }
 }
