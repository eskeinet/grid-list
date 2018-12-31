import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {GridListModule} from './grid-list/grid-list.module';
import {COLUMN_DEFINITIONS_TOKEN} from './grid-list/column-definitions-provider.token';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GridListModule,
  ],
  providers: [
    {
      provide: COLUMN_DEFINITIONS_TOKEN,
      useValue: [
        {headerName: 'Project', field: 'project'},
        {headerName: 'Role', field: 'role'},
        {headerName: 'URL', field: 'liveUrl'},
        {headerName: 'Status', field: 'status'},
        {headerName: 'Case study', field: 'caseUrl'},
        {headerName: 'GitHub repository', field: 'githubUrl'},
        {headerName: 'Delivery date', field: 'date'},
      ],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
