import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {TeamListComponent} from "./team/teamlist.component";
import {AboutComponent} from "./about/about.component";



@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [TopNavigationComponent, ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/teams', name: 'Teams', component: TeamListComponent, useAsDefault: true },
    { path: '/about', name: 'About', component: AboutComponent }
])

export class AppComponent {
    welcome = 'Here we go!';
    menuItems = [{
        name: 'Teams',
        link: 'teams'
    },{
        name: 'About',
        link: 'about'
    }];

}
