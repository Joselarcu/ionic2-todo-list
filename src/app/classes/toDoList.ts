import { Task } from './task';


export class ToDoList{
    name: string;
    finished: boolean;
    tasks: Task[];

    constructor(name:string){
        this.name = name;
        this.finished = false;
    }
}