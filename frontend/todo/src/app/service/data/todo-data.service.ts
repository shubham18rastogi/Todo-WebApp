import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './../../list-todo/list-todo.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retriveAllTodos(username) {
    console.log('Bean Service');
    return this.http.get<Todo[]>(
      `http://localhost:8080//users/${username}/todos`
    );
  }

  retriveTodo(username, id) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  deleteTodo(username, id) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  updateTodo(username, id, todo) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }

  createTodo(username, todo) {
    return this.http.post(
      `http://localhost:8080/users/${username}/todos`,
      todo
    );
  }
}
