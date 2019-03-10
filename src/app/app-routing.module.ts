import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout/layout-home/layout-home.component';

const routes: Routes = [
  { path: '', component: LayoutHomeComponent },
  { path: 'home', component: LayoutHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
