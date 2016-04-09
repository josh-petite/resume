import {Component} from 'angular2/core';

@Component({
    selector: 'main-view',
    templateUrl: 'src/views/main.html'
})

export class AppComponent {
    profile: Profile = {
        name: 'Josh Petite'
    }    
}

export class Profile {
    name: string
}