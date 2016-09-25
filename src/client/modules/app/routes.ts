import {RouterModule} from '@angular/router';
import {HomeComponent} from './components';

export const routes = RouterModule.forRoot([
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: HomeComponent
    }
]);