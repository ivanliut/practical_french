import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AlertModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    StoreModule.forRoot(reducers, { metaReducers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
