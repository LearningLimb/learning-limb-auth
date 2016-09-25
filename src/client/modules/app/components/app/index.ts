import { Component } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
    selector: 'learning-limb',
    template: require('./template.html'),
    styles: [require('./styles.css')]
})
export class AppComponent {

    constructor(private title: Title){
        this.title.setTitle('LearningLimb - Put Your Family In The Story!');
    }
}
