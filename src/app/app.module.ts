import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

import { OrganizationChartModule } from 'primeng/organizationchart';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    PanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
