import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {LoginFormComponent} from "./components/login-form/login-form.component";
import {RegistrationPageComponent} from "./pages/registration-page/registration-page.component";
import {RegistrationFormComponent} from "./components/registration-form/registration-form.component";
import {VerificationTokenPageComponent} from "./pages/verification-token-page/verification-token-page.component";
import {VerificationTokenFormComponent} from "./components/verification-token-form/verification-token-form.component";
import {HomePageComponent} from "../home/home-page/home-page.component";
import {SharedModule} from "../shared.module";
import {LoginPageComponent} from "./pages/login-page/login-page.component";



@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    VerificationTokenPageComponent,
    VerificationTokenFormComponent,
    LoginPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
  ],
  exports:[
    LoginPageComponent,
  ]
})
export class AuthorizationModule { }
