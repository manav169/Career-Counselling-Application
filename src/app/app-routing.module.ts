import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'form1',
    loadChildren: () => import('./form1/form1.module').then( m => m.Form1PageModule)
  },
  {
    path: 'collegelist',
    loadChildren: () => import('./collegelist/collegelist.module').then( m => m.CollegelistPageModule)
  },
  {
    path: 'courselist',
    loadChildren: () => import('./courselist/courselist.module').then( m => m.CourselistPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forgetpass',
    loadChildren: () => import('./forgetpass/forgetpass.module').then( m => m.ForgetpassPageModule)
  },
  {
    path: 'topcollege',
    loadChildren: () => import('./topcollege/topcollege.module').then( m => m.TopcollegePageModule)
  },
  {
    path: 'contactus',
    loadChildren: () => import('./contactus/contactus.module').then( m => m.ContactusPageModule)
  },
  {
    path: 'get-contactus',
    loadChildren: () => import('./get-contactus/get-contactus.module').then( m => m.GetContactusPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./career/career.module').then( m => m.CareerPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
