import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './shared/component/layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './shared/component/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetPasswordComponent } from './auth/forget-password/forget-password.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { ErrorComponent } from './shared/component/error/error.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: "auth",
  //   pathMatch: "full"
  // },
  {
    path: "",
    component: AuthLayoutComponent,
    children: 
    [
      {
        path: "",
        component: LoginComponent
      },

    ]
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "user",
        loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./modules/settings/settings.module").then(m => m.SettingsModule)
      },
    ]
  },
  {
    path: "**",
    component:ErrorComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
