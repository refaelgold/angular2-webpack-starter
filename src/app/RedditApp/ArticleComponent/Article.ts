import {Component} from 'angular2/core';

@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    
    styles: [
        require('./../sematic.css'),
    ],
    template: require('./article.html')
})





export class Article {
    title: string;
    link: string;
    votes: number;
    constructor(title: string, link: string, votes?: number) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }
}

