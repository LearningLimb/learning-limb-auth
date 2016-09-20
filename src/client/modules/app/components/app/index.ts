import { Component }          from '@angular/core';

@Component({
    selector: 'tour-of-heroes',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})
export class AppComponent {
    title = 'Tour of Heroes';
}
