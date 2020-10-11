import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from '../todo-item';
import { TodoList } from '../todo-list';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  newItem: TodoItem;
  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  onSubmit(data) {
    this.newItem = {
      id: TodoList.length + 1, // ottengo l'id dalla lunghezza della lista 
      title: data.title,
      date: this.getDate()
    }
    TodoList.push(this.newItem); // inserisco il nuovo elemento in lista
    this.router.navigate(['']) // ritorno alla rotta principale
  }

  getDate():string {
    let d= new Date()
    let day = d.getDate()
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    let date = `${day}-${m}-${y}`;
    return date;
  }

}
