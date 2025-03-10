import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'signup',
    loadComponent: () => import('./pages/signup/signup.component').then(m => m.SignupComponent)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'users',
        loadComponent: () => import('./pages/dashboard/users/users.component').then(m => m.UsersComponent)
      },
      {
        path: 'users/new',
        loadComponent: () => import('./pages/dashboard/users/user-new/user-new.component').then(m => m.UserNewComponent)
      },
      {
        path: 'users/:userId',
        loadComponent: () => import('./pages/dashboard/users/user-detail/user-detail.component').then(m => m.UserDetailComponent)
      }
    ]
  }
];
