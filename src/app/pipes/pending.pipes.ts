import { Pipe, PipeTransform } from '@angular/core';
import { ToDoList } from '../classes/toDoList';


@Pipe({
    name: 'pending',
    pure: false
})

export class PendingPipe implements PipeTransform {
    transform(lists: ToDoList[], state: boolean = false): ToDoList[] {
        let newList: ToDoList[] = [];
        for(let list of lists){
            if(list.finished == state){
                newList.push(list);
            }
        }
        return newList;
    }
}