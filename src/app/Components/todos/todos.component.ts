import { Component, OnInit } from '@angular/core';
import {Todo} from './../../Models/Todo'
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
  constructor() { }
  inputTodo:string;
  ngOnInit(): void {
    this.todos = [
      {
        content:"fisrt todo",
        completed:false
      },
      {
        content:"second todo",
        completed:false 
      }
    ]
  }
  toggleDone(id:number){
    this.todos.map((v,i)=>{
      if(i==id) v.completed =!v.completed;

      return v;
    })
  }
  toggleRemove(id:number){
    this.todos = this.todos.filter((v,i)=>
      i !== id
    )
  }

  addTodos(){
    this.todos.push({
      content : this.inputTodo,
      completed:false
    }

    )
  }
}
