import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpComponent } from '../sign-up/sign-up.component';
import { ModalLoginComponent } from '../modal-login/modal-login.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SignUpComponent,
    ModalLoginComponent
  ],
  exports: [
    SignUpComponent,
    ModalLoginComponent
  ]
})
export class WelcomeModule { }
