import {Component} from 'angular2/core';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'Tutorial',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
   styles: [ require('./tutorial.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./tutorial.html')
})
export class Tutorial {


  name=null;
  // Set our default values
  data = { value: '' };
  // TypeScript public modifiers
  constructor() {
    this.name="";
  }


  changeName(newName){
    this.name=newName;
  }





  // angular js official tuts
  yourName: string = '';








  ngOnInit() {
    console.log('hello `Tutorial` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
