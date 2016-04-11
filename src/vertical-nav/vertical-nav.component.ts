import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'vertical-nav',
    templateUrl: 'src/vertical-nav/view.html'
})

export class VerticalNavComponent {
    expanded: boolean; 
    
    constructor(private _router: Router) {        
        this.expanded = false;
    }
    
    navigateToProjects() {
        this._router.navigate(['Projects']);
    }
    
    navigateToResume() {
        this._router.navigate(['Resume']);
    }
}
