import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { MainComponent } from './main/main.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    MainComponent,
    
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
  ]
})
export class AdminModule { }
