import { ModuleWithProviders } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent, HomePageComponent } from './index';

export const HomeRoutes: Route[] = [
  
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
		component: HomePageComponent
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(HomeRoutes);