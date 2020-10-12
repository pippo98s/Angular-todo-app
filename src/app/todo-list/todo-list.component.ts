import { Component, OnInit } from '@angular/core';
import {TodoItem} from '../todo-item';
import { TodoList } from '../todo-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  list: TodoItem[] = TodoList;
  displayedColumns: string[] = ['id', 'title', 'date' , 'options'];

  constructor() { }

  ngOnInit(): void {
  }

}
