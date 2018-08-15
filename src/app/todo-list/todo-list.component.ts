import { TodoDataService } from './../todo-data.service';
import { Component, EventEmitter, Input, Output, NgModule } from '@angular/core';
import { Todo } from '../todo';
import { BrowserModule } from "@angular/platform-browser/src/platform-browser";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})

export class TodoListComponent {

  completedCounter : number = 0;

  notCompletedList: Todo[];
  
  @Input() todos: Todo[];
  
  @Output() remove: EventEmitter<Todo> = new EventEmitter();

  constructor() {  }

  onToggleTodoComplete(todo: Todo) {
    this.completedCounter = 0;
    todo.todoCompleted = !todo.todoCompleted;
    
    for(let i=0;i< this.todos.length; i++) {
      if(this.todos[i].todoCompleted == true ) {
        ++this.completedCounter;
      }
    }
  }

  removeTodo(todo: Todo) {
    this.remove.emit(todo);
  }

}