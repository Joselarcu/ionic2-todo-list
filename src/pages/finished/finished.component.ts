import { Component, OnInit } from '@angular/core';
import { ToDoList } from '../../app/classes/toDoList';
import { ToDoListService } from '../../app/services/to-do-list.service';
import { NavController } from 'ionic-angular';
import { DetailComponent } from '../detail/detail.component';

@Component({
    selector: 'app-finished',
    templateUrl: 'finished.component.html'
})

export class FinishedComponent implements OnInit {

     lists: ToDoList[];

    constructor(private toDoListService: ToDoListService, private navController: NavController) { }

    ngOnInit() {
        this.lists = this.toDoListService.lists
       
     }

     goToDetail(list: ToDoList,index: number){
        this.navController.push(DetailComponent,{
            list: list,
            index: index
        });
    }
}