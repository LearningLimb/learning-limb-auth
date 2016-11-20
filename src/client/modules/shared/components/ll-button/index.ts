import { Component, Input } from '@angular/core';

@Component({
    selector: 'll-button',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class ButtonComponent {
    @Input() color: string = '#f7292a';
    @Input() type: string;
}
