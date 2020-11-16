import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FindingPageComponent } from './finding-page/finding-page.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },

  {
    path: 'home',
    component: HomepageComponent,
  },

  {
    path: 'find',
    component: FindingPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
