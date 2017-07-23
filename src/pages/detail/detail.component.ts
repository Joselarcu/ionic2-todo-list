import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Task, ToDoList } from '../../app/classes/index';
import { ToDoListService } from '../../app/services/to-do-list.service';
import { AlertController } from 'ionic-angular';

@Component({
    selector: 'app-detail',
    templateUrl: 'detail.component.html'
})

export class DetailComponent implements OnInit {

    idx: number;
    list: ToDoList;

    constructor(public navCtrl: NavController, public navParams: NavParams, public toDoListService: ToDoListService, public alertCtrl: AlertController) {
        this.idx = this.navParams.get("index");
        this.list = this.navParams.get("list");

    }

    ngOnInit() { }

    update(task: Task) {
        task.finished = !task.finished;

        let allFinished = true;
        for(let task of this.list.tasks){
            if(!task.finished){
                allFinished = false;
                break;
            }
        }
        this.list.finished = allFinished;
        this.toDoListService.updateData();

    }

    deleteList() {
        let confirm = this.alertCtrl.create({
            title: this.list.name,
            message: 'Are you sure you want to delete this list?',
            buttons: [
                {
                    text: 'Disagree',
                    handler: () => {
                        
                    }
                },
                {
                    text: 'Agree',
                    handler: () => {
                        this.toDoListService.deleteList(this.idx);
                          this.navCtrl.pop();
                    }
                }
            ]
        });
        confirm.present();
    }
}