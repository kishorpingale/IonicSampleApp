import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  orderedItems : any;

  constructor(public navCtrl: NavController, private restProvider: RestProvider) {
    this.getOrders();
  }

  getOrders() {
    this.restProvider.getOrders().subscribe(data=> console.log(data));
  }
}
