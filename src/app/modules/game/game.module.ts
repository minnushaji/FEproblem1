import { NgModule } from '@angular/core';
import { GameRoutingModule } from './game-routing.module';

import { FindingPageComponent } from './finding-page/finding-page.component';
import { HomepageComponent } from './homepage/homepage.component';


import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    FindingPageComponent,
    HomepageComponent
  ],
  imports: [
    GameRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class GameModule { }
