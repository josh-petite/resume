import {Component} from 'angular2/core';

@Component({
    selector: 'vertical-nav',
    templateUrl: 'src/vertical-nav/view.html'
})
export class VerticalNavComponent {
    expanded: boolean;
    
    constructor() {
        this.expanded = false;
    }
}
