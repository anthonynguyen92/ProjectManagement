import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ABP } from '@abp/ng.core';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      routes: {
        name: '::Menu:Home'
      } as ABP.Route
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
