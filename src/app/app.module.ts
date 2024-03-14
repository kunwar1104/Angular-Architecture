import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardLayoutComponent } from './shared/component/layout/dashboard-layout/dashboard-layout.component';
import { HeaderSidebarComponent } from './shared/component/header-sidebar/header-sidebar.component';
import { FooterComponent } from './shared/component/footer/footer.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations'; // Import here
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    AuthLayoutComponent,
    LoaderComponent,
    ErrorComponent,
    NotificationComponent,
    DashboardLayoutComponent,
    HeaderSidebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NoopAnimationsModule 
    
  ],
  exports: [
    DashboardLayoutComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
