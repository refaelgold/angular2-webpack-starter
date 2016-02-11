import {Component} from 'angular2/core';
import {UiTabs} from './directives/ui_tabs';
import {UiPane} from './directives/ui_pane';

class Detail {
  title: string;
  text: string;
}


@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'TabAppOfficial',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    // Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [UiTabs, UiPane],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./tab.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./tab.html')
})

export class TabAppOfficial {
  details: Detail[] = [];
  id: number = 0;
  addDetail() {
    this.id++;
    this.details.push({
      title: `Detail ${this.id}`,
      text: `Some detail text for ${this.id}...`
    });
  }
  removeDetail(detail:Detail) {
    this.details = this.details.filter((d) => d !== detail);
  }
  ngOnInit() {
    console.log('hello `Tab` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}