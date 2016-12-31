import { Component } from '@angular/core';

@Component({
    selector: 'books',
    template: require('./template.html'),
    styles: [require('./styles.scss')]
})
export class BooksComponent {
    books: string[] = ['a', 'b', 'c', 'd', 'e'];
}
