import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { AuthLayoutComponent } from './shared/component/layout/auth-layout/auth-layout.component';
import { LoaderComponent } from './shared/component/loader/loader.component';
import { NotificationComponent } from './shared/component/notification/notification.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ErrorComponent } from './shared/component/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AuthLayoutComponent,
    LoaderComponent,
    NotificationComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  // exports: [
  //   DashboardLayoutComponent
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
