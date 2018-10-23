import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProductStatusPage } from './product-status';

@NgModule({
  declarations: [
    ProductStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductStatusPage),
  ],
})
export class ProductStatusPageModule {}
