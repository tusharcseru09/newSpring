import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { BusinessComponent } from '../business/business.component';
import { CustomerComponent } from '../customer/customer.component';
import { FormcontrolComponent } from '../formcontrol/formcontrol.component';
import { FrmgrpComponent } from '../frmgrp/frmgrp.component';

const routes: Routes = [
  { path:  'home', component:  HomeComponent},
  { path:  'business', component:  BusinessComponent},
  { path:  'customer', component:  CustomerComponent},
  { path:  'formControl', component:  FormcontrolComponent},
  { path:  'formGroup', component:  FrmgrpComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

