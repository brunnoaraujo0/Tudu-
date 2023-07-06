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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { CalendarComponent } from './components/calendar/calendar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CalendarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NgZorroAntdMobileModule,
    BrowserAnimationsModule

  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
