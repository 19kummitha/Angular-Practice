
import { Component } from '@angular/core';

@Component({
selector:'app-databinding',
templateUrl:'./databinding.component.html'
})
export class databindingComponent{
    name:string='koti'
    func(){
        return 'hello'+this.name;
    }
}