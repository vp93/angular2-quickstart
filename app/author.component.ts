import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component ({
    selector:'authors',
    template:`
            <h2>This is the authors title</h2>
            {{title}}
            <ul>
                <li *ngFor="#author of authors">
                    {{author}}
                 </li>
            </ul>
            `,
    providers :[AuthorService]
})

export class AuthorComponent {
    title =" Title for AuthorComponent class ";
    authors;

    constructor(authorService : AuthorService) {
        this.authors = authorService.getAuthor();
    }

}