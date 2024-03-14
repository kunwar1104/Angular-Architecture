import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermissionComponent } from './permission.component';
import { DashboardGuard } from 'src/app/shared/guards/dashboard/dashboard.guard';

const routes: Routes = [
    {
      path: "permission",
      component: PermissionComponent,
      data:{id:'1', name:"Permission"},
      canActivate: [DashboardGuard],
  
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PermissionRoutingModule { }
