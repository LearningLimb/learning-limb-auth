import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService } from '../../../shared';

@Component({
    selector: 'login-form',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class LoginFormComponent implements OnInit {
    @Output() login: EventEmitter<any> = new EventEmitter();
    user: User;

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
        this.clearFields();
    }

    onSubmit() {
        this.auth.login(this.user).subscribe(data => {
            this.login.emit(true);
            this.clearFields();
            this.router.navigateByUrl('/home');
        });
    }

    clearFields() {
        let user = new User();
        user.local = { email: null, password: null };

        this.user = user;
    }
}
