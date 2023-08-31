import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginRoutingModule } from './login-routing.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
  imports: [
    LoginRoutingModule,
    CommonModule
  ]
})
export class LoginModule { }
