import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GridPagesComponent } from './grid-pages/grid-pages.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    GridPagesComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule, 
    AgGridModule.withComponents([])
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
