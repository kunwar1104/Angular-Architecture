import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from 'src/app/auth/forget-password/forget-password.component';
import { LoginComponent } from 'src/app/auth/login/login.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"for-pass",
    pathMatch:"full"
  },
  {
    path: "for-pass",
    component: ForgetPasswordComponent
  },
  // {
  //   path:"login",
  //   component: LoginComponent
  // },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
