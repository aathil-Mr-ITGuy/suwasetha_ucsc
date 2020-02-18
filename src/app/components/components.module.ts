import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DispensaryBarComponent } from './dispensary-bar/dispensary-bar.component';
import { DoctorSidebarComponent } from 'app/doctor-bars/doctor-sidebar/doctor-sidebar.component';
import { DoctrosBarComponent } from './doctros-bar/doctros-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { LoginComponent } from 'app/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StaffSidebarComponent} from 'app/staff-bars/staff-sidbar/staff-sidebar.component';
import { StafBarComponent} from './staf-bar/staf-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
    StaffSidebarComponent,
    
    StafBarComponent,
   
  //  DoctrosBarComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    DoctorSidebarComponent,
    TitleBarComponent,
    LoginComponent
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    DispensaryBarComponent,
    DoctorSidebarComponent,
    DoctrosBarComponent,
    DoctorSidebarComponent,
    TitleBarComponent,
    LoginComponent,
    StafBarComponent,
    StaffSidebarComponent
   
  ]
})
export class ComponentsModule { }
