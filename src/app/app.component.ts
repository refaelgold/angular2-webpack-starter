/*
 * Angular 2 decorators and services
 */
import {Component} from 'angular2/core';
import {RouteConfig, Router} from 'angular2/router';

import {Home} from './home';
import {AppState} from './app.service';
import {RouterActive} from './router-active';
// import {Tutorial} from './Tutorial/Tutorial';//Need to study the basic
import {TodoApp} from './TodoApp/TodoApp';//Need to study the basic
import {Ngbook2} from './Ngbook2/Ngbook2';//Need to study the basic
import {RedditApp} from './RedditApp/RedditApp';//Need to study the basic
import {TabAppOfficial} from './TabAppOfficial/TabAppOfficial';//Need to study the basic
import {NGAfterHours} from './NGAfterHours/NGAfterHours';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive ],
  styles: [`
    h1 {
      font-family: Arial, Helvetica, sans-serif
    }
    nav ul {
      display: inline;
      list-style-type: none;
      margin: 0;
      padding: 0;
      width: 60px;
    }
    nav li {
      display: inline;
    }
    nav li.active {
      background-color: lightgray;
    }
  `],
  template: `
    <header>
      <nav>
        <h1>Hello {{ name }}</h1>
        <ul>
          <li router-active>
            <a [routerLink]=" ['Index'] ">Index</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Home'] ">Home</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['About'] ">About</a>
          </li>
          <!--<li router-active>-->
            <!--<a [routerLink]=" ['Tutorial'] ">Tutorial</a>-->
          <!--</li>-->
          <li router-active>
            <a [routerLink]=" ['TabAppOfficial'] ">TabAppOfficial</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['TodoApp'] ">TodoApp</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['Ngbook2'] ">Ngbook2</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['RedditApp'] ">Reddit App</a>
          </li>
          <li router-active>
            <a [routerLink]=" ['NGAfterHours'] ">NGAfterHours App</a>
          </li>
        </ul>
      </nav>
    </header>

    <main>
      <router-outlet></router-outlet>
    </main>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <span>WebPack Angular 2 Starter by <a [href]="url">@AngularClass</a></span>
      <div>
        <a [href]="url">
          <img [src]="angularclassLogo" width="25%">
        </a>
      </div>
    </footer>
  `
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/TodoApp',  name: 'TodoApp',  component: TodoApp },
  // { path: '/Tutorial',  name: 'Tutorial',  component: Tutorial },
  { path: '/Ngbook2',  name: 'Ngbook2',  component: Ngbook2 },
  { path: '/RedditApp',  name: 'RedditApp',  component: RedditApp },
  { path: '/TabAppOfficial',  name: 'TabAppOfficial',  component: TabAppOfficial },
  { path: '/NGAfterHours',  name: 'NGAfterHours',  component: NGAfterHours },
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') },
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
      public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
