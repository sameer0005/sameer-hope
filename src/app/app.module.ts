import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {  HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GetrateService } from './getrate.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [GetrateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
