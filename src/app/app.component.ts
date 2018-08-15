import { Component } from '@angular/core';
import { TodoDataService } from './todo-data.service';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    TodoDataService
  ]
})
export class AppComponent {
    title: string = "AIG-TodoApp";
  constructor(private todoDataService: TodoDataService) {}

  onAddTodo(todo: Todo) {
    this.todoDataService.addTodo(todo);
  }

  onToggleTodoComplete(todo: Todo) {
    this.todoDataService.toggleTodoComplete(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.todoDataService.deleteTodo(todo.id);
  }

  get todos() {
    return this.todoDataService.getAllTodos();
  }
}
