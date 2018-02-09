import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MediaMatcher} from '@angular/cdk/layout';

import { AppComponent } from './app.component';
import { AppMaterialModule } from './app-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }