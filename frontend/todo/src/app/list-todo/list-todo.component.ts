import { Component, OnInit } from '@angular/core';
import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css'],
})
export class ListTodoComponent implements OnInit {
  todos = [
    // new Todo(1, 'Learn Spring', false, new Date()),
    // new Todo(2, 'Learn Angular', false, new Date()),
    // new Todo(1, 'Become Java Expert', false, new Date()),
  ];

  constructor(private todoService: TodoDataService, private router: Router) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retriveAllTodos('shbhm').subscribe((response) => {
      this.todos = response;
      console.log(response);
    });
  }

  updateTodo(id) {
    this.router.navigate(['/todos', id]);
  }

  deleteTodo(id) {
    console.log(id);
    this.todoService.deleteTodo('shbhm', id).subscribe((response) => {
      console.log('deleted');
      this.refreshTodos();
      alert('Todo Deletion successfull!!');
    });
  }

  addTodo() {
    this.router.navigate(['/todos/-1']);
  }
}
