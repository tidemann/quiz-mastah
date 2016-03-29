import {Component} from "angular2/core";
import {Team} from "./team";
import {TeamEditComponent} from "./teamedit.component";

@Component({
    selector: 'team-list',
    templateUrl: 'app/team/team-list.html',
    directives: [TeamEditComponent]
})

export class TeamListComponent {
    teams = [
        new Team('Morrari'),
        new Team('Pappari')
    ];
}