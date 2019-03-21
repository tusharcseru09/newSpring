import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './routing/app-routing.module';

import { AppComponent } from './app.component';
import { NavMainComponent } from './nav-main/nav-main.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { CustomerComponent } from './customer/customer.component';
import { FormcontrolComponent } from './formcontrol/formcontrol.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FrmgrpComponent } from './frmgrp/frmgrp.component';
import { CusRetypePasswordDirective } from './custom-validation/cusRetypePassword.directive';
//import { CusRetypePasswordDirective } from './custom-validation/cusRetypePassword.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavMainComponent,
    HomeComponent,
    BusinessComponent,
    CustomerComponent,
    FormcontrolComponent,
    FrmgrpComponent,
    CusRetypePasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
   // CusRetypePasswordDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
