import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import {NgxPrintModule} from 'ngx-print';
import { NgxPrintElementModule } from 'ngx-print-element';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule,
    NgxPrintElementModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
