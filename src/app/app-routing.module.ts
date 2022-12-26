import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonaldetailsComponent } from './personaldetails/personaldetails.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/details/admin',pathMatch:'full'
  },
  {
    path:'details/admin',component:PersonaldetailsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
