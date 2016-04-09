import {Component} from 'angular2/core';
import {HorizontalNavComponent} from './horizontal-nav/horizontal-nav.component'
import {VerticalNavComponent} from './vertical-nav/vertical-nav.component'

@Component({
    selector: 'main-view',
    templateUrl: 'src/views/main.html',
    directives: [HorizontalNavComponent, VerticalNavComponent]
})

export class AppComponent {
    profile: Profile = {
        name: 'Josh Petite'
    }    
}

export class Profile {
    name: string
}