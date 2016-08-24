import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { routing } from './routes';
import {HeroesComponent, HeroDetailComponent} from './components';
import {HeroService} from './services';

@NgModule({
    imports: [CommonModule, FormsModule, HttpModule, routing],
    declarations: [HeroesComponent, HeroDetailComponent],
    providers: [HeroService]
})
export class HeroesModule { }

export * from './models';
export * from './services';