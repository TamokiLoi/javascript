import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilterButton, Filter } from 'src/app/models/filtering.model';
import { TodoService } from 'src/app/services/todo.service';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {

  filterButtons: FilterButton[] = [
    { type: Filter.All, label: 'All', isActive: true },
    { type: Filter.Active, label: 'Active', isActive: false },
    { type: Filter.Complete, label: 'Complete', isActive: false },
  ];

  length = 0;
  hasComplete$: Observable<boolean>;
  destroy$: Subject<null> = new Subject<null>();

  constructor(
    private _todoService: TodoService
  ) { }

  ngOnInit() {
    this.hasComplete$ = this._todoService.todos$.pipe(
      map(todos => todos.some(t => t.isCompleted)),
      takeUntil(this.destroy$)
    );

    this._todoService.length$.pipe(takeUntil(this.destroy$)).subscribe(length => {
      this.length = length;
    });
  }

  filter(type: Filter) {
    this.setActiveFilterBtn(type);
    this._todoService.filterTodos(type);
  }

  private setActiveFilterBtn(type: Filter) {
    this.filterButtons.forEach(btn => {
      btn.isActive = btn.type === type;
    });
  }

  clearCompleted() {
    this._todoService.clearComplete();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
