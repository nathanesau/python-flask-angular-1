import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ExamsApiService} from './exams/exams-api.service';
import {TimeService} from './time/time.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [ExamsApiService, TimeService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
