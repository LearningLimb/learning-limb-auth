import { Injectable, Inject } from '@angular/core';
import { ApiService } from './api';
import { Observable } from 'rxjs';
import { User } from '../';

@Injectable()
export class AuthService {

    constructor(private api: ApiService) {}

    isAuthenticated() {
        return this.api.get('/auth/authenticated');
    }

    register(user: User) {
        return this.api.post('/auth/local/register', user);
    }
    
    login(user: User) {
        return this.api.post('/auth/local/login', user);
    }
}
