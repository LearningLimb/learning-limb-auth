import { NgModule, CUSTOM_ELEMENTS_SCHEMA }       from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './components';
import {SharedModule} from '../shared';
import {routes} from './routes';

import * as Components from './components';
const COMPONENT_DECLARATIONS = Object.keys(Components).map(key => Components[key]);

@NgModule({
    imports: [BrowserModule, SharedModule.forRoot(), routes],
    declarations: [AppComponent, ...COMPONENT_DECLARATIONS],
    bootstrap: [AppComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
