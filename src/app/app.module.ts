import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import '@angular/localize/init';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { ModalLoginComponent } from './components/modal-login/modal-login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { PlannerComponent } from './components/planner/planner.component';
import { UserComponent } from './components/user/user.component';
import { CreateComponent } from './components/create/create.component';
import { TuduItemComponent } from './components/tudu-item/tudu-item.component';
import { InProgressComponent } from './components/in-progress/in-progress.component';
import { AuthService } from './components/modal-login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './guard/auth-guard.service';
import { ShowTuduComponent } from './components/show-tudu/show-tudu.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ModalLoginComponent,
    SignUpComponent,
    HomeComponent,
    PlannerComponent,
    UserComponent,
    CreateComponent,
    TuduItemComponent,
    InProgressComponent,
    ShowTuduComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
