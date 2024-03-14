import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { PermissionComponent } from './permission/permission.component';
import { AuthenticationGuard } from 'src/app/shared/guards/authentication/authentication.guard';
import { DashboardGuard } from 'src/app/shared/guards/dashboard/dashboard.guard';

const routes: Routes = [
  // {
  //   path: "settings",
  //   // component:SettingsComponent
  // },
  {
    path: "modules",
    component: ModulesComponent,
    data:{id:'1', name:"Modules"},
    canActivate: [DashboardGuard],

  },
  {
    path: "permission",
    component: PermissionComponent,
    data:{ id:'1', name:"Permission"},
    canActivate: [DashboardGuard],
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
