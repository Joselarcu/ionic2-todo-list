import { Component, OnInit } from '@angular/core';
import { Task, ToDoList } from '../../app/classes/index';
import { AlertController, NavController } from 'ionic-angular';
import { ToDoListService } from '../../app/services/to-do-list.service';


@Component({
    selector: 'app-add',
    templateUrl: 'add.component.html'
})

export class AddComponent implements OnInit {

    listName: string = "";
    taskName: string = "";

    tasks: Task[] = [];

    constructor(public todoListService: ToDoListService, public alertCtrl: AlertController, public navCtrl: NavController) { }

    ngOnInit() { }

    addTask(): void {
        if (this.taskName.length == 0) {
            return;
        }

        let task = new Task();
        task.name = this.taskName;
        this.tasks.push(task);
        this.taskName = "";

    }

    deleteTask(index: number): void {
        this.tasks.splice(index, 1);
    }

    saveList(): void {
        if (this.listName.length == 0) {
            let alert = this.alertCtrl.create({
                title: 'List name',
                subTitle: 'list name is required',
                buttons: ['OK']
            });
            alert.present();
            return;
        }

        let myList = new ToDoList(this.listName);
        myList.tasks = this.tasks;
        this.todoListService.addList(myList);
        this.navCtrl.pop();
    }

}