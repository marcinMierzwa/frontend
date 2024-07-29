import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    title:'home',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent) 
}];
