import {Component} from "angular2/core";
import {Team} from "./team";

@Component({
    selector: 'team-edit',
    templateUrl: 'app/team/team-edit.html'
})

export class TeamEditComponent{
    team = new Team('');
}