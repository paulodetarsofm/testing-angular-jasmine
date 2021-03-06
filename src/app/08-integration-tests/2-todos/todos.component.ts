import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TodoService } from './todo.service';

@Component({
  selector: 'testing-todos',
  templateUrl: './todos.component.html'
})
export class TodosComponent implements OnInit, OnDestroy {

  todos: any[] = [];
  message: any;

  private subscriptions = new Subscription();

  constructor(
    private service: TodoService,
  ) { }

  ngOnInit() {
    this.subscriptions.add(
      this.service
        .getTodos()
        .subscribe((toDos: any) => this.todos = toDos)
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  add(): void {
    const newTodo = { title: '... ' };

    this.service
      .add(newTodo)
      .subscribe({
        next: (toDo: any) => this.todos.push(toDo),
        error: (error: any) => this.message = error
      });
  }

  delete(id: number): void {
    if (confirm('Are you sure?')) {
      this.subscriptions.add(
        this.service
          .delete(id)
          .subscribe()
      );
    }
  }
}
