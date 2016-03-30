import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
@Component({
    selector: 'top-navigation',
    templateUrl: 'app/top-navigation/top-navigation.html',
    directives: [ROUTER_DIRECTIVES]
})
export class TopNavigationComponent {
    menuItems = [{
        name: 'Teams',
        link: 'teams'
    },{
        name: 'About',
        link: 'about'
    }];
}
