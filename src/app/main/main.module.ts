import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { SumaryComponent } from './sumary/sumary.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    SumaryComponent,
    ItemsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule, FormsModule, BrowserModule
  ], schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class MainModule { }
