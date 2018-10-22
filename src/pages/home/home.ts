import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  orderList = [];

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
    this.getOrders();
  }

  getOrders() {
    this.restProvider.getOrders().subscribe(data=> this.orderList = data);
  }
}
