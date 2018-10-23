import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/**
 * Generated class for the ProductStatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-status',
  templateUrl: 'product-status.html',
})
export class ProductStatusPage {

  private productList: any = [];
  loader: any = this.loadingCtrl.create();

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private restProvider: RestProvider, public loadingCtrl: LoadingController) {
      this.loader.present();
      this.getProducts();
  }

  getProducts() {
    // this.restProvider.getProducts().subscribe(data=> this.productList = data);
    this.restProvider.getProducts().subscribe(data=> {this.productList = data},
      err => {console.error('Error:', err.message);
              this.loader.dismiss()},
      () => this.loader.dismiss());
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad ProductStatusPage');
  // }
}
