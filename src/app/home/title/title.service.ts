import {Injectable} from 'angular2/core';

@Injectable()
export class Article {
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }
  voteUp() {
    this.votes += 1;
  }
  voteDown() {
    this.votes -= 1;
  }

}
