import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User, AuthService } from '../../../shared';

@Component({
    selector: 'signup',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class SignupComponent implements OnInit {

    user: User;

    constructor(private auth: AuthService, private router: Router) {
    }

    ngOnInit() {
        // If aleady authenticated navigate to /home
        this.auth.isAuthenticated().subscribe(() => {
            this.router.navigateByUrl('/home');
        });

        this.user = new User();
        this.user.local = { email: null, password: null };
    }

    onSubmit() {
        this.auth.register(this.user).subscribe(() => {
            this.router.navigateByUrl('/home');
        }, (error) => console.log(error));
    }
}
