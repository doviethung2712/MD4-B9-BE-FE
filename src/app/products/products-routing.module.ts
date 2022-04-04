import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductcreateComponent } from './productcreate/productcreate.component';
import { ProducteditComponent } from './productedit/productedit.component';
import { ProductlistComponent } from './productlist/productlist.component';


const routes: Routes = [
  {
    path: 'list',
    component: ProductlistComponent
  },
  {
    path: 'create',
    component: ProductcreateComponent
  },
  {
    path: 'update/:id',
    component: ProducteditComponent
  },
  {
    path: 'delete/:id', component: DeleteproductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
