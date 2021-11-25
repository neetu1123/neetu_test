import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailComponent } from './detail/detail.component';
import { LayoutdesignComponent } from './layoutdesign/layoutdesign.component';
import { LoginComponent } from './login/login.component';
import { NextPageComponent } from './next-page/next-page.component';

const routes: Routes = [
  { path:'dashbord', component:DashboardComponent},
  {  path:'login',component:LoginComponent  },
  { path:'contact', component:ContactComponent},

  { path:'detail', component:DetailComponent},
  { path:'nextPage', component:NextPageComponent},
  {path:'about',component:AboutComponent},
  {path:'layoutdesign',component:LayoutdesignComponent},
  






  { path:'', redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
