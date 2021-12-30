import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [new Todo('first todo!'), new Todo('Hey!!!')];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedTodoField: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedTodoField);
  }

  deleteTodo(id: string) {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index == -1) return;

    this.todos.splice(index, 1);
  }
}
