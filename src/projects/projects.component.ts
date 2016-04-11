import {Component} from 'angular2/core';

@Component({
    selector: 'projects',
    templateUrl: 'src/projects/view.html'
})
export class ProjectsComponent {
    name: string = "Projects"
    
    constructor() {
        
    }
}