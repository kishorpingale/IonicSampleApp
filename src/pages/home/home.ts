import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private orderList: any = [];

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
    this.getOrders();
    //this.getProducts();
  }

  getOrders() {
    this.restProvider.getOrders().subscribe(data=> this.orderList = data);
  }

  getProducts() {
    this.restProvider.getProducts().subscribe(data=> this.orderList = data);
  }
}
