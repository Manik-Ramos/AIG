import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  todoItemId = 0;

  todosList: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
    if (!todo.id)
      todo.id = ++this.todoItemId;
    this.todosList.push(todo);
    return this;
  }

  deleteTodo(id: number): TodoDataService {
    this.todosList = this.todosList
      .filter(todo => todo.id !== id);
    return this;
  }

  updateTodo(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
    if (!todo) {
      return null;
    }

    Object.assign(todo, values);
    return todo;
  }

  getAllTodos(): Todo[] {
    return this.todosList;
  }

  getTodoById(id: number): Todo {
    return this.todosList
      .filter(todo => todo.id === id)
      .pop();
  }

  toggleTodoComplete(todo: Todo) {
    let updatedTodo = this.updateTodo(todo.id, {
      todoCompleted : !todo.todoCompleted
    });
    return updatedTodo;
  }
}