import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
  }

  toggleAll() {
    this._todoService.toggleAll();
  }

}
