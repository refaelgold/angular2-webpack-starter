"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var title_1 = require('./services/title');
var x_large_1 = require('./directives/x-large');
var todo_list_1 = require('./directives/todo_list/todo_list');
var todo_form_1 = require('./directives/todo_form/todo_form');
var TodoApp = (function () {
    function TodoApp() {
        // json file
        this.todos = [
            { text: 'learn angular', done: true },
            { text: 'build an angular app', done: false }
        ];
    }
    Object.defineProperty(TodoApp.prototype, "remaining", {
        get: function () {
            return this.todos.reduce(function (count, todo) { return count + +!todo.done; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    TodoApp.prototype.archive = function () {
        var _this = this;
        var oldTodos = this.todos;
        this.todos = [];
        oldTodos.forEach(function (todo) {
            if (!todo.done)
                _this.todos.push(todo);
        });
    };
    TodoApp.prototype.addTask = function (task) {
        this.todos.push(task);
    };
    TodoApp.prototype.ngOnInit = function () {
        console.log('hello `TodoApp` component');
        // this.title.getData().subscribe(data => this.data = data);
    };
    TodoApp = __decorate([
        core_1.Component({
            // The selector is what angular internally uses
            // for `document.querySelectorAll(selector)` in our index.html
            // where, in this case, selector is the string 'app'
            selector: 'TodoApp',
            // We need to tell Angular's Dependency Injection which providers are in our app.
            providers: [
                title_1.Title
            ],
            // We need to tell Angular's compiler which directives are in our template.
            // Doing so will allow Angular to attach our behavior to an element
            directives: common_1.FORM_DIRECTIVES.concat([
                x_large_1.XLarge,
                todo_list_1.TodoList,
                todo_form_1.TodoForm
            ]),
            // We need to tell Angular's compiler which custom pipes are in our template.
            pipes: [],
            // Our list of styles in our component. We may add more to compose many styles together
            styles: [require('./todo_app.css')],
            // Every Angular template is first compiled by the browser before Angular runs it's compiler
            template: require('./todo_app.html')
        }), 
        __metadata('design:paramtypes', [])
    ], TodoApp);
    return TodoApp;
}());
exports.TodoApp = TodoApp;
//# sourceMappingURL=TodoApp.js.map