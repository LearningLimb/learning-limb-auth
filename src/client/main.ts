import 'core-js/es6';
import 'reflect-metadata';
import 'zone.js/dist/zone';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { TourOfHeroesModule } from './modules/app';

platformBrowserDynamic().bootstrapModule(TourOfHeroesModule);
