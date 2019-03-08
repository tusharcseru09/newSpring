import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BusinessComponent } from '../business/business.component';
import { CustomerComponent } from '../customer/customer.component';

const routes: Routes = [
  { path:  'home', component:  HomeComponent},
  { path:  'business', component:  BusinessComponent},
  { path:  'customer', component:  CustomerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

