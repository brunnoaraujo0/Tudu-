import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlannerComponent } from './components/planner/planner.component';
import { UserComponent } from './components/user/user.component';
import { CreateComponent } from './components/create/create.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthGuardService } from './guard/auth-guard.service';

const routes: Routes = [
  {path: '', component: WelcomeComponent },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'planner', component: PlannerComponent, canActivate: [AuthGuardService]},
  {path: 'user', component: UserComponent, canActivate: [AuthGuardService]},
  {path: 'create', component: CreateComponent, canActivate: [AuthGuardService]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
