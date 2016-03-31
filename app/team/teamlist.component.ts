import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Team} from "./team";
import {TeamEditComponent} from "./teamedit.component";


@Component({
    selector: 'team-list',
    templateUrl: 'app/team/team-list.html',
    directives: [TeamEditComponent,ROUTER_DIRECTIVES]
})

export class TeamListComponent {
    teams = [
        new Team('Team Me'),
        new Team('Team Yoi')
    ];
    navigateToTeam(team: Team){
        console.log(team);
    }
}