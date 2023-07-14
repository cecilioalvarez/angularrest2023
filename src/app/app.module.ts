import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { C2Component } from './c2/c2.component';
import {MatTabsModule} from '@angular/material/tabs';

import {MatTreeModule} from '@angular/material/tree';
@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
     MatMenuModule,
     BrowserAnimationsModule,
     HttpClientModule,
     MatTabsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
