import { Component } from 'angular2/core';

@Component({
    selector: 'landing',
    templateUrl: 'src/landing/view.html'
})
export class LandingComponent {
    name: string = 'Josh' 
    
    constructor() {
        //TODO: Cache here
    }
}