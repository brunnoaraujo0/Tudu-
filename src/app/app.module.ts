import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ModalLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
