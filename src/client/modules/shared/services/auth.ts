import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {

    constructor(private api: ApiService) {}

    isAuthenticated() {
        return this.api.get('/auth/authenticated');
    }
}
