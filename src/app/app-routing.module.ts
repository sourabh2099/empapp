import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddempComponent } from './addemp/addemp.component';
import { ViewallemployeeComponent } from './viewallemployee/viewallemployee.component';
import { ViewbydeptComponent } from './viewbydept/viewbydept.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { ViewempbyidComponent } from './viewempbyid/viewempbyid.component';

const routes: Routes = [{path:'addemployee',component:AddempComponent},
                        {path:'getall',component:ViewallemployeeComponent},
                        {path:'getbydept',component:ViewbydeptComponent},
                        {path:'viewemp',component:ViewempComponent},
                        {path:'getbyid',component:ViewempbyidComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
