import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DoctorLayoutRoutes } from './doctor-layout.routing';




import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule,
  MatTableModule,
  MatPaginatorModule
} from '@angular/material';

import { AppointmentsComponent } from 'app/layouts/doctor-components/appointments/appointments.component';
import { BlogPostsComponent } from 'app/layouts/doctor-components/blog-posts/blog-posts.component';
import { MaterialModule } from 'app/shared/material/material.module';
import { DashboardComponent } from 'app/layouts/doctor-components/dashboard/dashboard.component';
import { PrescriptionsComponent } from 'app/layouts/doctor-components/prescriptions/prescriptions.component';
import { UserProfileComponent} from 'app/layouts/doctor-components/user-profile/user-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(DoctorLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    MatTableModule,
    MatPaginatorModule,
    MaterialModule
  ],
  declarations: [
    DashboardComponent,
    AppointmentsComponent,
    UserProfileComponent,
    BlogPostsComponent,
    PrescriptionsComponent,
  

   /* TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,*/
  ],

  
})

export class DoctorLayoutModule {}
