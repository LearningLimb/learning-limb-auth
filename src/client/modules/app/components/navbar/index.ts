import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService } from '../../../shared';

@Component({
    selector: 'navbar',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class NavBarComponent implements OnInit {
    userName;
    
    constructor(private auth: AuthService, private zone: NgZone){}

    ngOnInit() {
        if (window.location.hash === '#_=_') {
            window.location.hash = '';
        }

        this.authenticate();
    }

    authenticate() {
        this.auth.isAuthenticated().subscribe(user => this.zone.run(() => {
            this.userName = user.name.givenName;
        }), (err) => console.log('Failed to authenticate user'));
    }
}
