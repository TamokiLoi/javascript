import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos$: Observable<Todo[]>;

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.todos$ = this._todoService.todos$;
  }

  onChangeTodoStatus(todo: Todo) {
    this._todoService.changeTodoStatus(todo.id, todo.isCompleted);
  }

  onEditToto(todo: Todo) {
    this._todoService.editTodo(todo.id, todo.content);
  }

  onDeleteTodo(todo: Todo) {
    this._todoService.deleteTodo(todo.id);
  }
}
