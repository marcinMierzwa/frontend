import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
    {
      path: 'home',
      title: 'home',
      loadComponent: () =>
        import('./home/home.component').then((component) => component.HomeComponent),
    },
  {
    path: 'signup',
    title: 'signup',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then(
        (component) => component.SignUpComponent
      ),
  },
  {
    path: 'signin',
    title: 'signin',
    loadComponent: () =>
      import('./sign-in/sign-in.component').then(
        (component) => component.SignInComponent
      ),
  },
  { path: '**', redirectTo: 'home'}
];
