import { Injectable } from '@angular/core';
import { ToDoList } from '../classes/toDoList';


@Injectable()
export class ToDoListService {

    lists: ToDoList[] = [];

    constructor() {
        this.getData();
     }

     updateData(): void{
         localStorage.setItem("data",JSON.stringify(this.lists));
     }

     getData():void{
         if(JSON.parse(localStorage.getItem("data"))){
            this.lists = JSON.parse(localStorage.getItem("data"));
         }
     }

     addList(list: ToDoList): void{
         this.lists.push(list);
         this.updateData();

     }

     deleteList(index: number): void{
         this.lists.splice(index,1);
         this.updateData();
     }
    
}