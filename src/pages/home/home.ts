import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { ProductStatusPage } from '../product-status/product-status';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private orderList: any = [];
  loader: any = this.loadingCtrl.create();

  constructor(public navCtrl: NavController, private restProvider: RestProvider,
    public loadingCtrl: LoadingController) {
    this.loader.present();  
    this.getOrders();
  }

  // presentLoading() {
  //   const loader = this.loadingCtrl.create({
  //     content: "Please wait...",
  //     duration: 3000
  //   });
  //   loader.present();
  // }

  private getOrders() {
    // this.restProvider.getOrders().subscribe(data=> this.orderList = data);

      this.restProvider.getOrders().subscribe(data=> {this.orderList = data},
        err => {console.error('Error:', err.message);
                this.loader.dismiss()},
        () => this.loader.dismiss());
  }

  statusPage() {
    this.navCtrl.push(ProductStatusPage);
  }
}
