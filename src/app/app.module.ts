import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './modules/game/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FindingPageComponent } from './modules/game/finding-page/finding-page.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
