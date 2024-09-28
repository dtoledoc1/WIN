import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthProfileRoutingModule } from './auth-profile-routing.module';
import { AuthProfileComponent } from './auth-profile.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    AuthProfileComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthProfileRoutingModule,
    SharedModule
  ]
})
export class AuthProfileModule { }
