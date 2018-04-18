import { Injectable } from '@angular/core';
import { Todo } from './todo';

let todos = [
  { title: 'Install Angular CLI', isDone: true },
  { title: 'Style app', isDone: true },
  { title: 'Finish service functionality', isDone: false },
  { title: 'Setup API', isDone: false },
];

@Injectable()

export class TodoDataService {

    // Placeholder for last id so we can simulate
    // automatic incrementing of id'simulate
    lastId: number = 0;

    // Placeholder for todo'simulate
    todos: Todo[] = [];

    constructor() {

    }

    get(){
        return new Promise(resolve => resolve(todos));
    }

    // Simulate POST /todos
    addTodo(todo: Todo): TodoDataService {
        if (!todo.id) {
            todo.id = ++this.lastId;
        }
        this.todos.push(todo);
        return this;
    }

    // Simulate DELETE /todos/:id
    deleteTodoById(id: number): TodoDataService {
        this.todos = this.todos
        .filter(todo => todo.id !== id);
        return this;
    }

    // Simulate PUT /todos/:id
    updateTodoById(id: number, values: Object = {}): Todo {
        let todo = this.getTodoById(id);
        if (!todo) {
            return null;
        }
        Object.assign(todo, values);
        return todo;
    }

    // Simulate GET /todos
    getAllTodos(): Todo[] {
        return this.todos;
    }

    // // Simulate GET /todos
    getTodoById(id: number): Todo {
        return this.todos
        .filter(todo => todo.id === id)
        .pop();
    }

    // Toggle todo complete
    toggleTodoComplete(todo: Todo) {
        let updatedTodo = this.updateTodoById(todo.id, {
            complete: !todo.complete
        });
        return updatedTodo;
    }
}