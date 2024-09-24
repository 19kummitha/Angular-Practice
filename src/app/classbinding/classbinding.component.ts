import { Component } from '@angular/core';
@Component({
    selector:'app-classbinding',
    templateUrl:'./classbinding.component.html',
    styles:[
        `
        .text-success{
            color:green;
        }
        .text-danger{
            color:red;
        }
        .text-special{
            font-style:italic;
        }
        `
    ]
})


export class classbindingComponent{
    hasError=false;
    success='text-success';
    isspecial=true
    messages={
        'text-success':!this.hasError,
        'text-danger':this.hasError,
        'text-special':this.isspecial
    }
    
}