import { TodoItem } from './todoItem';
import { TodoList } from './todoList';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list = new TodoList("محمد",[
    new TodoItem("گرفتن ویزا اتریش", false),
    new TodoItem("یادگیری git",true),
    new TodoItem ("یادگیری زبان angular", false)
  ])
  get username():string{
   return this.list.user;
  };

  get itemCount():number {
    return this.list.items
           .filter(item=>!item.complete).length
  }
  get items(){
    return this.list.items.filter(item=>this.showcomplete || !item.complete)
  }

  addItem(newitem:string){
    if (newitem!=""){
      this.list.addItem(newitem);
    }
  }
  showcomplete:boolean=false;
}

