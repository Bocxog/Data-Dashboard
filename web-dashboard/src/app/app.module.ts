import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { GridPagesComponent } from './grid-pages/grid-pages.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    AppComponent,
    GridPagesComponent
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
