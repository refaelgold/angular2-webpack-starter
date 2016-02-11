import {Component, Input} from 'angular2/core';
import {TodoEntity} from '../../directives/todo_entity/todo_entity';
@Component({
    selector: 'todo-list',
    template:require('./todo_list.html'),
    styles: [ require('./todo_list.css') ],
})

export class TodoList {
    @Input() todos: TodoEntity[];
}