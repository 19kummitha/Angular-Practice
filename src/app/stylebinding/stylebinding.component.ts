import {Component} from '@angular/core';

@Component({
    selector:'app-stylebinding',
    templateUrl:'./stylebinding.component.html'
})

export class stylebinding{
    borderColor='black';
    backgroundColor='red';
    textAlign='center';
    muliplestyle={
        'background-color':'blue',
        'text-align':'center'
    }

}