import { Component, Input } from '@angular/core';
import { PlayersService } from "../../services/players.service";
import { IPlayer } from "../../abstractions/IPlayer";
import { Guid } from "../../utils/Guid";

@Component({
  selector: 'app-change-player',
  templateUrl: './change-player.component.html',
  styleUrls: ['./change-player.component.scss']
})
export class ChangePlayerComponent {

  @Input()
  playersList: IPlayer[] = [];

  ratingArr: number[] = [1, 2, 3, 4, 5];

  constructor(public service: PlayersService) {
  }

  addPlayer() {
    this.playersList.push({
      id: Guid.NewGuid(),
      name: 'Novo jogador',
      team: 1,
      rating: 1
    })
  }

  removePlayer(player: IPlayer) {
    this.service.unsave(player.id);
    this.playersList = this.playersList.filter(p => p.id != player.id);
  }

  showIcon(index: number, rating: number) {
    return rating >= index + 1 ? 'star' : 'minimize';
  }

  onRating(player: IPlayer, rating: number) {
    player.rating = rating;
    this.service.save(player);
  }

}
