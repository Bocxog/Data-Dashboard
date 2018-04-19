import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServerApi } from '../config/config.service';

@Component({
  selector: 'app-grid-pages',
  templateUrl: './grid-pages.component.html',
  styleUrls: ['./grid-pages.component.css']
})

export class GridPagesComponent implements OnInit {

  
  columnDefs = [
    // {headerName: 'Make', field: 'make' },
    // {headerName: 'Model', field: 'model' },
    // {headerName: 'Price', field: 'price'}
    {headerName: 'Date', field: 'dateCreated',  filter: 'agDateColumnFilter' },
    {headerName: 'Url', field: 'url' },
];

  rowData: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.rowData = this.http.get(ServerApi.values);
  }


  // searchHeroes(term: string): Observable<Hero[]> {
  //   term = term.trim();
  
  //   // Add safe, URL encoded search parameter if there is a search term
  //   const options = term ?
  //    { params: new HttpParams().set('name', term) } : {};
  
  //   return this.http.get<Hero[]>(this.heroesUrl, options)
  //     .pipe(
  //       catchError(this.handleError<Hero[]>('searchHeroes', []))
  //     );
  // }
}
