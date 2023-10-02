import { Component, Input } from '@angular/core';
import { IPlayer } from "../../abstractions/IPlayer";

@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss'],
})
export class TeamPlayerComponent {
  @Input() player: IPlayer | undefined;
}
