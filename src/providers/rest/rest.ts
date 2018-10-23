import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

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
    .catch(this.handleError);
  }

  getProducts() {
    return this.http.get(this.baseUrl + '/Products')
    .do(this.logResponse)
    .map(this.extractData)
    .catch(this.handleError);
  }

  private logResponse(res: Response) {
    console.log(res);
  }

  private extractData(res: Response) {
    return res;
  }

  private handleError(error) {
    console.error(error);
      console.log('error within catch is ' + Response)
      if(error.status === 404)
        return Observable.throw("Not found error");

      return Observable.throw("handleError " + error);
  }
 }
