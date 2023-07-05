import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Auth/login/login.component';
import { RegisterComponent } from './Auth/register/register.component';
import { DashboardComponent } from './Auth/dashboard/dashboard.component';
import { CalanderComponent } from './Auth/Calander/calander/calander.component';

const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  { path:'login', component: LoginComponent },
  { path:'Register', component: RegisterComponent },
  { path:'Dashboard', component: DashboardComponent },
  { path:'Calander', component: CalanderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
