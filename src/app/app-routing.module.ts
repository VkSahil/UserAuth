import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Setting The Routes for Children Components 
const routes: Routes = [{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
 { path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
