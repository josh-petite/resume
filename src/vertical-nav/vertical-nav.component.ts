import {Component} from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
    selector: 'vertical-nav',
    templateUrl: 'src/vertical-nav/view.html'
})

export class VerticalNavComponent {
    descriptionHidden: boolean; 
    
    constructor(private _router: Router) {        
        this.descriptionHidden = true;
    }
    
    navToProjects() {
        this._router.navigate(['Projects', { }]);
    }
}
