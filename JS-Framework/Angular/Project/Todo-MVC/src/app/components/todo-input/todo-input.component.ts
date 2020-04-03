import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  todoContent = '';

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
  }

  addTodo() {
    if (this.todoContent.trim() === '') {
      return false;
    }

    this._todoService.addTodo(this.todoContent);
    this.todoContent = '';
  }
}
