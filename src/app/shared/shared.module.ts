import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    LeftPanelComponent,
    NavBarComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    LeftPanelComponent,
    NavBarComponent
  ]
})
export class SharedModule { }
