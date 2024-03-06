import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserComponent } from '../user/user.component';
import { SettingsComponent } from '../settings/settings.component';
import { DashboardLayoutComponent } from 'src/app/shared/component/layout/dashboard-layout/dashboard-layout.component';
import { HeaderSidebarComponent } from 'src/app/shared/component/header-sidebar/header-sidebar.component';
import { FooterComponent } from 'src/app/shared/component/footer/footer.component';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardComponent,
    HeaderSidebarComponent,
    FooterComponent,
    // UserComponent,
    // SettingsComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent,
    DashboardLayoutComponent
  ]
})
export class DashboardModule { }
