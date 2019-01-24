
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { ArtworkDashboardViewComponent } from './artwork-dashboard-view/artwork-dashboard-view.component';
import { ArtworkListViewComponent } from './artwork-list-view/artwork-list-view.component';



const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage', component: HomepageComponent },
  { path: 'map', component: OpenStreetMapComponent },
  { path: 'list', component: ArtworkListViewComponent },
  { path: 'dashboard', component: ArtworkDashboardViewComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
