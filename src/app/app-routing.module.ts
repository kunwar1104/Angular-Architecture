import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './shared/component/layout/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  {
    path: "",
    component:DashboardLayoutComponent,
    children:[
      {
        path: "dashboard",
        loadChildren: () => import ("./modules/dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "user",
        loadChildren: () => import ("./modules/user/user.module").then(m => m.UserModule)
      },
      {
        path: "settings",
        loadChildren: () => import("./modules/settings/settings.module").then(m => m.SettingsModule)
      },
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
