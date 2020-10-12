import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, Validators } from '@angular/forms';

import { TodoList } from '../todo-list';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  idPost;
  idArray;
  titlePost;
  editFormControl = new FormControl('', [
    Validators.required
  ]);
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
  ) { }

  ngOnInit(): void {
    if (TodoList.length > 0){
      // prendo l'id dalla rotta e lo converto in numbero con l'operatore +
      this.idPost = +this.route.snapshot.paramMap.get('id');
      this.idArray = this.idPost - 1;
      this.titlePost = TodoList[this.idArray].title;
    }
  }

  onSubmit(data){
    console.log(data);
    this.editItem(TodoList[this.idArray] , data );
    this.router.navigate(['']) // ritorno alla rotta principale
  }

  editItem(item , titleForm){
    item.title = titleForm
    item.date = this.getDate()
  }

  getDate(): string {
    let d = new Date()
    let day = d.getDate()
    let m = d.getMonth() + 1;
    let y = d.getFullYear();
    let date = `${day}-${m}-${y}`;
    return date;
  }

  goBack() {
    this.location.back();
  }
}
