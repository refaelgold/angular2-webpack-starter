import {Component, Output, EventEmitter} from 'angular2/core';
import {TodoEntity} from '../../directives/todo_entity/todo_entity';

@Component({
    selector: 'todo-form',
    template: require('./todo_form.html')
})


export class TodoForm {
    @Output() newTask = new EventEmitter<TodoEntity>()
    task: string = '';
    addTodo() {
        if (this.task) {
            this.newTask.next({text:this.task, done:false});
        }
        this.task = '';
    }
}