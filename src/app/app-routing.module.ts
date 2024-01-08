import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './Pages/browse/browse.component';
import { LoginComponent } from './Pages/login/login.component';

const routes: Routes = [
  {
    path: '', 
    component: LoginComponent
    // loadComponent: () => 
    //   import('./login/login.component').then(mod => mod.LoginComponent)
  },
  {
    path: 'browse', 
    component: BrowseComponent
    // loadComponent: () => 
    //   import('./browse/browse.component').then(mod => mod.BrowseComponent)
  },
  // {
  //   path: '',
  //   loadComponent: () => import('').then(mod => mod. )
  // }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
