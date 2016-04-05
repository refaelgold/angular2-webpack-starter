import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';



@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'Ngbook2',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
   styles: [ require('./ngbook2.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./ngbook2.html')
})


export class Ngbook2 {
  //attributes
  name: string;
  fruits :string[];

  
  constructor() {
    this.name = 'Nir Goldman';
    this.fruits=['banana','apple','kiwi'];
  }

  ngOnInit() {
    console.log('hello `Ngbook2` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
