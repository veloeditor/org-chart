import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

const routes: Routes = [
  { path: '', redirectTo: '/org-chart', pathMatch: 'full' },
  { path: 'org-chart', component: OrgChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
