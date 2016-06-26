// export * from './article.service';
import {Component} from 'angular2/core';
import {Article} from './Article';




@Component({
    selector: 'reddit-article',
    host: {
        class: 'row'
    },
    directives: [
        Article
    ],


styles: [
        require('./../sematic.css'),
    ],
    template: require('./article.html')
})



export class ArticleComponent {
    article: Article;
    constructor() {
        this.article = new Article('Angular 2', 'http://angular.io', 10);
    }
    voteUp(): boolean {
        this.article.votes += 1;
        return false;
    }
    voteDown(): boolean {
        this.article.votes -= 1;
        return false;
    }
}//end class