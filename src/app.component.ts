import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS } from 'ng2-material/all';

import { HorizontalNavComponent } from './horizontal-nav/horizontal-nav.component'
import { VerticalNavComponent } from './vertical-nav/vertical-nav.component'
import { LandingComponent } from './landing/landing.component'
import { ResumeComponent } from './resume/resume.component'
import { ProjectsComponent } from './projects/projects.component'
import { TwitterFeedComponent } from './twitter-feed/twitter-feed.component'

import { TweetService } from './twitter-feed/tweet.service';

@Component({
    selector: 'main-view',
    templateUrl: 'src/views/main.html',
    directives: [
        ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, HorizontalNavComponent, VerticalNavComponent, TwitterFeedComponent
    ],
    providers: [
        MATERIAL_PROVIDERS, TweetService
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
        path: '/resume',
        name: 'Resume',
        component: ResumeComponent
    },
    {
        path: '/projects',
        name: 'Projects',
        component: ProjectsComponent
    }
])

export class AppComponent {}