import { Routes, RouterModule }  from '@angular/router';

import { HeroesComponent } from './components/heroes';
import { HeroDetailComponent } from './components/hero-detail';

const routes: Routes = [
  {
    path: 'heroes/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }
];

export const routing = RouterModule.forChild(routes);
