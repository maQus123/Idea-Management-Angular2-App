import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {IdeaListComponent} from './ideas/idea-list.component';
import {IdeaCreateComponent} from './ideas/idea-create.component';
import {IdeaDetailComponent} from './ideas/idea-detail.component';

@Component({
    selector: 'idea-app',
    template: `
        <nav class="navbar navbar-inverse navbar-fixed-top">
            <div class="container">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" [routerLink]="['Root']">Idea Management System</a>
                </div>
                <div id="navbar" class="collapse navbar-collapse">
                    <ul class="nav navbar-nav">
                        <li><a [routerLink]="['Root']">Ideas</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <router-outlet></router-outlet>            
    `,
    directives: [IdeaListComponent, IdeaCreateComponent, ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/', name: 'Root', component: IdeaListComponent, useAsDefault: true },
    { path: '/ideas', name: 'Ideas', component: IdeaListComponent},
    { path: '/idea/:id', name: 'IdeaDetail', component: IdeaDetailComponent },
    { path: '/create-idea', name: 'CreateIdea', component: IdeaCreateComponent }
])

export class AppComponent {

    constructor() {
        //nothing to do
    }

}