import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { BrowseComponent } from './browse/browse.component';

const routes: Routes = [
  {
    path: '', 
    // component: LoginComponent
    loadComponent: ()=> 
      import('./login/login.component').then( mod => mod.LoginComponent)
  },
  {
    path: 'browse', 
    // component: BrowseComponent
    // loadComponent: ()=> 
    //   import('./browse/browse.component').then( mod => mod.BrowseComponent)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
