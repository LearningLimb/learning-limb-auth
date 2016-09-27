import {RouterModule} from '@angular/router';
import * as Components from './components';

export const routes = RouterModule.forRoot([
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Components.HomeComponent
    },
    {
        path: 'books',
        component: Components.BooksComponent
    }
]);