import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModulesComponent } from './modules.component';
import { DashboardGuard } from 'src/app/shared/guards/dashboard/dashboard.guard';

const routes: Routes = [
  
    {
      path: "modules",
      component: ModulesComponent,
      data:{ id:'1', name:"Modules"},
      canActivate: [DashboardGuard],
    },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModulesRoutingModule { }
