import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoListComponent} from './todo-list/todo-list.component';
import { AddTodoComponent} from './add-todo/add-todo.component';


const routes: Routes = [
  {path: '' , redirectTo:'list' , pathMatch:'full'},
  {path: 'list' , component: TodoListComponent},
  {path: 'add'  , component: AddTodoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
