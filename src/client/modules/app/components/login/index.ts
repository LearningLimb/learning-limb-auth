import { Component }   from '@angular/core';
import { Router }      from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  template: require('./template.html')
})
export class LoginComponent {
  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Todo: capture where the user was going and nav there.
        // Meanwhile redirect the user to the crisis admin
        this.router.navigate(['/crisis-center/admin']);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
