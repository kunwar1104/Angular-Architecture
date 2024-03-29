import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './shared/component/layout/dashboard-layout/dashboard-layout.component';
import { AuthLayoutComponent } from './shared/component/layout/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/login/login.component';
import { ErrorComponent } from './shared/component/error/error.component';
import { DashboardGuard } from './shared/guards/dashboard/dashboard.guard';
import { AuthenticationGuard } from './shared/guards/authentication/authentication.guard';
import { NotificationComponent } from './shared/component/notification/notification.component';

const routes: Routes = [
  {
    path: "",
    component: AuthLayoutComponent,
    canActivate:[AuthenticationGuard],
    children: 
    [
      {
        path: "",
        loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)

      },
    ]
  },
  {
    path: "",
    component: DashboardLayoutComponent,
    canActivate: [DashboardGuard],
    children: [
      {
        path: "dashboard",
        loadChildren: () => import("./modules/dashboard/dashboard.module").then(m => m.DashboardModule),
        data:{id:'1',name:"Dashboard"},
      },
      {
        path: "user",
        loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule),
        data:{id:'1',name:"User"},
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
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
