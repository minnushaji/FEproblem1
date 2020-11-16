import { NgModule } from '@angular/core';
import { MaterialModule } from './modules/material.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { PlanetListComponent } from './components/planet-list/planet-list.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [TopBarComponent, FooterComponent,PlanetListComponent],
  imports: [
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    MaterialModule,
    TopBarComponent,
    FooterComponent,
    PlanetListComponent,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SharedModule { }
