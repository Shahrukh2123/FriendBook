import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/authentication/login/login.component';
import { RegisterComponent } from './modules/authentication/register/register.component';
import { ForgotPasswordComponent } from './modules/authentication/forgot-password/forgot-password.component';
import { AuthenticationModule } from './modules/authentication/authentication.module';
import { ResetPasswordComponent } from './modules/authentication/reset-password/reset-password.component';
import { UserProfileComponent } from './modules/authentication/user-profile/user-profile.component';
import { HomeComponent } from './modules/authentication/home/home.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'forgot_password',
    component:ForgotPasswordComponent,
  },
  {
    path:'reset_password',
    component:ResetPasswordComponent,
  },
  {
    path:'user_profile',
    component:UserProfileComponent,
  },
  {
    path:'home',
    component:HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    AuthenticationModule
  ]
})
export class AppRoutingModule { }
