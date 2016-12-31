import { Component, Input } from '@angular/core';

@Component({
    selector: 'll-card',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class CardComponent {
    @Input() color: string = '#f7292a';
}
