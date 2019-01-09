import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';



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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    NgbModule.forRoot()

  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RecommendModalComponent,
    AddArtModalComponent,
    LoginModalComponent
  ]
})
export class AppModule { }
