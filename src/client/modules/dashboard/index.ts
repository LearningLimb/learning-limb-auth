import { NgModule }       from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { HttpModule, XHRBackend } from '@angular/http';

import { routing } from './routes';
import {DashboardComponent} from './components'

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
