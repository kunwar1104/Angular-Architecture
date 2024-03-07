import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules/modules.component';
import { PermissionComponent } from './permission/permission.component';

const routes: Routes = [
  // {
  //   path: "settings",
  //   // component:SettingsComponent
  // },
  {
    path: "modules",
    component: ModulesComponent
  },
  {
    path: "permission",
    component: PermissionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
