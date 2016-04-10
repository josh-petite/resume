import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component'
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component'
import { ProjectsComponent } from './projects/projects.component'
import { LandingComponent } from './landing/landing.component'

@Component({
    selector: 'main-view',
    templateUrl: 'src/views/main.html',
    directives: [ROUTER_DIRECTIVES, HorizontalNavComponent, VerticalNavComponent],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/',
        name: 'Landing',
        component: LandingComponent,
        useAsDefault: true
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsComponent
    }
])

export class AppComponent {
    title: string;
    
    profile: Profile = {
        name: 'Josh Petite'    
    }
    
    constructor() {
        this.title = 'Josh Petite - Resume'
    }        
}

export class Profile {
    name: string
}