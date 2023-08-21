import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
   // canActivate: [AuthGuard],
    component: MainComponent,
    children: [
      { path: 'category', component: CategoryComponent },
      { path: 'product', component: ProductComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
