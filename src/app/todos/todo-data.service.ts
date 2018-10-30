import { Injectable } from '@angular/core';
import { Todo } from './todo';
import { assertDataInRangeInternal } from '@angular/core/src/render3/util';

@Injectable()
export class TodoDataService {

  lastId = 0;
  todos: Todo[] = [];

  constructor() { }

  // Simulate POST request /todos
  addTodo(todo: Todo): TodoDataService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }
    this.todos.push(todo);
    return this;
  }

  // Simulate DELETE /todos/:id
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this;
  }

  // Simulate PUT /todos/:id
  updateTodoById(id: number, values: Object = {}): Todo | any {
    const todo = this.getTodoById(id);
    if (!todo) {
      return this;
    }
    Object.assign(todo, values);
    return todo;
  }

  // Simulate GET /todos
  getAllTodos(): Todo[] {
    return this.todos;
  }

  // Simulate GET /todos/:id
  getTodoById(id: number): Todo | any {
    return this.todos
      .filter(todo => todo.id === id)
      .pop();
  }

  // Simulate GET /todos/:category
  getTodoByCategory(categoryId: number): Todo[] | any {
    return this.todos.filter(todo => todo.category === categoryId);
  }

  // Toggle todo complete
  // Returns updated Todo
  toggleTodoComplete(todo: Todo): Todo {
    const updatedTodo = this.updateTodoById(todo.id, {
      complete: !todo.complete
    });
    return updatedTodo;
  }
}
