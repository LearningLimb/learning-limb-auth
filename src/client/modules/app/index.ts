import { NgModule }       from '@angular/core';
import {RouterModule} from '@angular/router';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './components/app';
import { HttpModule, XHRBackend } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data';
import {DashboardModule} from '../dashboard';
import {HeroesModule} from '../heroes';

@NgModule({
    imports: [BrowserModule, FormsModule, DashboardModule, HeroesModule, RouterModule.forRoot([])],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
        { provide: XHRBackend, useClass: InMemoryBackendService },
        { provide: SEED_DATA, useClass: InMemoryDataService }
    ]
})
export class TourOfHeroesModule { }
