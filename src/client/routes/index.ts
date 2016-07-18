import { provideRouter, RouterConfig }  from '@angular/router';

import { DashboardComponent } from '../components/dashboard';
import { HeroesComponent } from '../components/heroes';
import { HeroDetailComponent } from '../components/hero-detail';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const appRouterProviders = [
    provideRouter(routes)
];
