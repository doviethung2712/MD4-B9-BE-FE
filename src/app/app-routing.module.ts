import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductcreateComponent } from './products/productcreate/productcreate.component';
import { ProductlistComponent } from './products/productlist/productlist.component';


const routes: Routes = [
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
