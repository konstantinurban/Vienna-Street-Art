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
import { AddArtModalComponent } from './open-street-map/add-art-modal/add-art-modal.component';
import { LoginModalComponent } from './homepage/login-modal/login-modal.component';
import { AddArtButtonComponent } from './open-street-map/add-art-button/add-art-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    OpenStreetMapComponent,
    AddArtModalComponent,
    LoginModalComponent,
    AddArtButtonComponent,
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
    AddArtModalComponent,
    LoginModalComponent
  ]
})
export class AppModule { }
