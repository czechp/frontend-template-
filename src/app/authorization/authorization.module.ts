import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
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
import {SharedModule} from "../shared.module";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {UsersPageComponent} from './pages/users-page/users-page.component';
import {UsersListComponent} from './components/users-list/users-list.component';
import {MatTableModule} from "@angular/material/table";
import {UserDetailsPageComponent} from './pages/user-details-page/user-details-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import {UserInfoComponent} from './components/user-info/user-info.component';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    LoginFormComponent,
    RegistrationPageComponent,
    RegistrationFormComponent,
    VerificationTokenPageComponent,
    VerificationTokenFormComponent,
    LoginPageComponent,
    UsersPageComponent,
    UsersListComponent,
    UserDetailsPageComponent,
    UserInfoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule
  ],
  exports:[
  ]
})
export class AuthorizationModule { }
