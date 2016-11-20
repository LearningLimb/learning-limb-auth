import {NgModule, ModuleWithProviders} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import * as Components from './components';
let componentDeclarations = Object.keys(Components).map(key => Components[key]);

import * as Services from './services';
let providers = Object.keys(Services).map(key => Services[key]);

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule],
    declarations: [...componentDeclarations],
    exports: [CommonModule, FormsModule, HttpModule, ...componentDeclarations]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [...providers]
        }
    }
}

export * from './services';
export * from './models';