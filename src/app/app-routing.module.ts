import { DetailsPostComponent } from './components/posts/details-post/details-post.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerAppComponent } from './components/pages/container-app/container-app.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerAppComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/pages/home/home.module').then(m => m.HomeModule)
      },
      { path: 'wizard', loadChildren: () => import('./components/pages/wizard/wizard.module').then(m => m.WizardModule) },
      { path: 'post/:id', component: DetailsPostComponent },
      {
        path: 'about',
        loadChildren: () =>
          import('./components/pages/about/about.module').then(
            m => m.AboutModule
          )
      },
      
      { path: 'register', loadChildren: () => import('./components/register/register.module').then(m => m.RegisterModule) },
      {
        path: 'login',
        loadChildren: () =>
          import('./components/auth/login/login.module').then(m => m.LoginModule)
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./components/admin/admin.module').then(m => m.AdminModule)
  },
  
  
  
  
  
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
