import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardLayoutComponent } from 'src/app/shared/component/layout/dashboard-layout/dashboard-layout.component';
import { AuthenticationGuard } from 'src/app/shared/guards/authentication/authentication.guard';
import { DashboardGuard } from 'src/app/shared/guards/dashboard/dashboard.guard';

const routes: Routes = [
  // {
  //   path:"",
  //   redirectTo: 'dashboard',
  //   pathMatch: "full",
  // },
  {
      path: "",
      component: DashboardComponent,
      data:{id:'1',name:"Dashboard"},
      canActivate: [DashboardGuard],

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
