import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { YellowComponent } from './yellow/yellow.component';
import { GreenComponent } from './green/green.component';
import { RedComponent } from './red/red.component';
import { DashboardService } from './dashboard/dashboard.service';
import { DateComponent } from './date/date.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AgGridModule.withComponents([GreenComponent, RedComponent, YellowComponent, DateComponent]), HttpClientModule],
  declarations: [ AppComponent, HelloComponent, DashboardComponent, GreenComponent, YellowComponent, RedComponent, DateComponent ],
  bootstrap:    [ AppComponent ],
  providers: [DashboardService]
})
export class AppModule { }
