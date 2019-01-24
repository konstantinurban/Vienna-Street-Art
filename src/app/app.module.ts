import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OpenStreetMapComponent } from './open-street-map/open-street-map.component';
import { AppRoutingModule } from './/app-routing.module';
// login
import { LoginModalComponent } from './homepage/login-modal/login-modal.component';
// add-art
import { AddArtModalComponent } from './open-street-map/add-art/add-art-modal/add-art-modal.component';
import { AddArtButtonComponent } from './open-street-map/add-art/add-art-button/add-art-button.component';
// recommend-art
import { RecommendButtonComponent } from './open-street-map/recommend-art/recommend-button/recommend-button.component';
import { RecommendModalComponent } from './open-street-map/recommend-art/recommend-modal/recommend-modal.component';
import { PopupsComponent } from './open-street-map/popups/popups.component';

import { ImageUploadComponent } from './open-street-map/image-upload/image-upload.component';
import { FilterMapComponent } from './open-street-map/filter-map/filter-map.component';
// import { ArtworkListViewComponent } from './open-street-map/artwork-list-view/artwork-list-view.component';
// import { ArtworkListComponent } from './open-street-map/artwork-list/artwork-list.component';

import { FiltersPipe } from './open-street-map/filter-map/filters.pipe';
import { DuplicatesPipe } from './open-street-map/filter-map/duplicates.pipe';
import { ArtworkInputComponent } from './artwork-input/artwork-input.component';
import { ArtworkListComponent } from './artwork-list/artwork-list.component';
import { ArtworkListViewComponent } from './artwork-list-view/artwork-list-view.component';
import { ArtworkDashboardComponent } from './artwork-dashboard/artwork-dashboard.component';
import { ArtworkDashboardViewComponent } from './artwork-dashboard-view/artwork-dashboard-view.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OpenStreetMapComponent,
    AddArtModalComponent,
    LoginModalComponent,
    AddArtButtonComponent,
    RecommendButtonComponent,
    RecommendModalComponent,
    PopupsComponent,
    ImageUploadComponent,
    FilterMapComponent,
    FiltersPipe,
    DuplicatesPipe,
    ArtworkInputComponent,
    ArtworkListComponent,
    ArtworkListViewComponent,
    ArtworkDashboardComponent,
    ArtworkDashboardViewComponent
    // ArtworkListViewComponent,
    // ArtworkListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [
    NgbActiveModal,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RecommendModalComponent,
    AddArtModalComponent,
    LoginModalComponent
  ]
})
export class AppModule { }
