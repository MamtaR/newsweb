import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';

import {HttpClientModule} from '@angular/common/http'
import { NewsapiservicesService } from './service/newsapiservices.service';
import { RouterModule } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { BussinessnewsComponent } from './bussinessnews/bussinessnews.component';

// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BussinessnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TopheadingComponent }, //home component
      { path: 'tech', component: TechnewsComponent }, //technews component
      { path: 'business', component: BussinessnewsComponent }, //businessnews component
    ])
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
