import { Component, Input } from '@angular/core';
import { IPlayer } from "../../abstractions/IPlayer";

@Component({
  selector: 'app-soccer-field',
  templateUrl: './soccer-field.component.html',
  styleUrls: ['./soccer-field.component.scss']
})
export class SoccerFieldComponent {

  @Input() team1: IPlayer[] = [];
  @Input() team2: IPlayer[] = [];

  getReserva(team: number) {
    if (team == 1)
      return this.team1[this.team1.length - 1].name;

    return this.team2[this.team2.length - 1].name;
  }

  getField(team: number) {
    if (team == 1) return this.team1.slice(0, this.team1.length - 1);
    return this.team2.slice(0, this.team2.length - 1);
  }

}
