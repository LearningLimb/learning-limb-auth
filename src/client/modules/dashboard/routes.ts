import { Routes, RouterModule }  from '@angular/router';

import { DashboardComponent } from './components/dashboard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];

export const routing = RouterModule.forChild(routes);
