import { Component, Input } from '@angular/core';

@Component({
    selector: 'll-jumbotron',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})
export class JumbotronComponent {
    @Input() color: String = '#fff';
}
