import { Component, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { TodoPage } from 'src/app/core/model/TodoPage';
import { TodoService } from 'src/app/core/service/api/to-do.service';
import { ToDoBusinessService } from 'src/app/core/service/business/to-do-business.service';

@Component({
  selector: 'app-to-do-page',
  templateUrl: './to-do-page.component.html',
  styleUrls: ['./to-do-page.component.scss']
})
export class ToDoPageComponent implements OnInit {

  selectedTodoPage!: Observable<TodoPage>;

  ngUnsubscribe = new Subject();

  constructor(
    private todoBusinessService: ToDoBusinessService
  ) {}

  ngOnInit(): void {
    this.selectedTodoPage = this.todoBusinessService.selectedTodoPage$;
    console.log("test " + this.selectedTodoPage);
  }
}
