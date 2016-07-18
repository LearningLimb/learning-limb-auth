import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { HeroService }        from '../../services/hero';

@Component({
    selector: 'my-app',
    template: require('./template.html'),
    styles: [require('./styles.css')],
    directives: [ROUTER_DIRECTIVES],
    providers: [
        HeroService,
    ]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
