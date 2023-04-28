import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';
import { HomePageComponent } from './home/home-page/home-page.component';
import { ContentComponent } from './layout/content/content.component';
import { LoginRequiredComponent } from './wildcard/login-required/login-required.component';
import { PageNotFoundComponent } from './wildcard/page-not-found/page-not-found.component';
import { PageComponent } from './component/page/page.component';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginFormComponent } from './login/components/login-form/login-form.component';
import { ValidationMsgComponent } from './component/validation-msg/validation-msg.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    ContentComponent,
    LoginRequiredComponent,
    PageNotFoundComponent,
    PageComponent,
    LoginPageComponent,
    NavBarComponent,
    LoginFormComponent,
    ValidationMsgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
