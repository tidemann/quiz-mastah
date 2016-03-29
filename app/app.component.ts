import {Component} from 'angular2/core';
import {TopNavigationComponent} from './top-navigation/top-navigation.component';
import {TeamListComponent} from "./team/teamlist.component";


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [TopNavigationComponent, TeamListComponent]
})
export class AppComponent {
        welcome = 'Here we go!';
}
