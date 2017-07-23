import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../../app/services/to-do-list.service';
import { ToDoList } from '../../app/classes/ToDoList';
import { NavController } from "ionic-angular";
import { AddComponent } from '../add/add.component';
import { DetailComponent } from '../detail/detail.component';


@Component({
    selector: 'app-todo',
    templateUrl: 'todo.component.html'
})

export class TodoComponent implements OnInit {

    lists: ToDoList[];

    constructor(private toDoListService: ToDoListService, private navController: NavController) { }

    ngOnInit() { 
        this.lists = this.toDoListService.lists
        console.log("lists",this.lists);
    }

    goToAdd():void{
        this.navController.push(AddComponent);
    }

    goToDetail(list: ToDoList,index: number){
        this.navController.push(DetailComponent,{
            list: list,
            index: index
        });
    }
}