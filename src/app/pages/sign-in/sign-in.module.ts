import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './component/sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { LoginModule } from 'src/app/components/login/login.module';
import { RegisterModule } from 'src/app/components/register/register.module';



@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    LoginModule,
    RegisterModule
  ]
})
export class SignInModule { }
