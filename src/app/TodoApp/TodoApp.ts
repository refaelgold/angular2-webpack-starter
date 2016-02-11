import {Component} from 'angular2/core';
import {FORM_DIRECTIVES} from 'angular2/common';

import {Title} from './services/title';
import {XLarge} from './directives/x-large';
import {TodoList} from './directives/todo_list/todo_list';
import {TodoForm} from './directives/todo_form/todo_form';
import {TodoEntity} from './directives/todo_entity/todo_entity';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'TodoApp',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    ...FORM_DIRECTIVES,
    XLarge,
    TodoList,
    TodoForm
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
   styles: [ require('./todo_app.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./todo_app.html')
})


export class TodoApp {

    // json file
  todos: TodoEntity[] = [
    {text:'learn angular', done:true},
    {text:'build an angular app', done:false}
  ];
  get remaining() {
    return this.todos.reduce((count: number, todo: TodoEntity) => count + +!todo.done, 0);
  }
  archive(): void {
    var oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach((todo: TodoEntity) => {
      if (!todo.done) this.todos.push(todo);
    });
  }
  addTask(task: TodoEntity) {
    this.todos.push(task);
  }


  ngOnInit() {
    console.log('hello `TodoApp` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

}
