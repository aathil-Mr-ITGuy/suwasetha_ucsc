import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';
// import { SystemUsersListComponent } from './systemUsers/system-users-list/system-users-list.component';
// import { DispensaryLayoutComponent } from './layouts/dispensary-layout/dispensary-layout.component';
// import { DoctorLayoutComponent } from './layouts/doctor-layout/doctor-layout.component';

const routes: Routes =[
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: DoctorLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/doctor-layout/doctor-layout.module#DoctorLayoutModule'
    }],
  }
  
]

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
