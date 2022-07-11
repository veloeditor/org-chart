import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

import { OrganizationChartModule } from 'primeng/organizationchart';
import { PanelModule } from 'primeng/panel';

import { MatDialogModule } from '@angular/material/dialog';
import { OrgDetailsComponent } from './components/org-details/org-details.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartComponent,
    OrgDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrganizationChartModule,
    PanelModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
