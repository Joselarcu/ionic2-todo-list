import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'placeholder'
})

export class PlaceHolderPipe implements PipeTransform {
    transform(value: string, defaultValue: string): any {
        return (value) ? value : defaultValue;
    }
}