import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomepageComponent } from './modules/game/homepage/homepage.component';
import { AppRoutingModule } from './app-routing.module';
import { FindingPageComponent } from './modules/game/finding-page/finding-page.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorService } from './core/services/http-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    CommonLayoutComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,    
    CoreModule,
    
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
