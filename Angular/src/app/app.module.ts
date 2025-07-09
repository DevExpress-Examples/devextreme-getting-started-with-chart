import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxChartModule } from 'devextreme-angular/ui/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
