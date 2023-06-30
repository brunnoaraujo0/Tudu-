import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PlannerComponent } from './components/planner/planner.component';
import { UserComponent } from './components/user/user.component';
import { CreateComponent } from './components/create/create.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'planner', component: PlannerComponent},
  {path: 'user', component: UserComponent},
  {path: 'create', component: CreateComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
