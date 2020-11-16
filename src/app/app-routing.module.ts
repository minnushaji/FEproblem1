import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './modules/game/homepage/homepage.component';
import { RouterModule, Routes } from '@angular/router';
import { FindingPageComponent } from './modules/game/finding-page/finding-page.component';
import { CommonLayoutComponent } from './layout/common-layout/common-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: CommonLayoutComponent,
    loadChildren: () => import('./modules/game/game.module')
      .then(mod => mod.GameModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
