import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';
import {ArticleComponent} from './ArticleComponent/article.component';


// We need to tell Angular's Dependency Injection which providers are in our app.






@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'reddit',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES
      ,ArticleComponent
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  providers: [

  ],  // Our list of styles in our component. We may add more to compose many styles together
  styles: [
    require('./sematic.css'),
    require('./redditapp.css')
  ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./redditapp.html')
})


export class RedditApp {
  //attributes
  name: string;
  fruits :string[];

  
  constructor() {
    this.name = 'Nir Goldman';
    this.fruits=['banana','apple','kiwi'];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): void {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
  }

  ngOnInit() {
    console.log('hello `RedditApp` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
