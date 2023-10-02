import { Component, } from '@angular/core';
import { PlayersService } from "../services/players.service";
import { IPlayer } from "../abstractions/IPlayer";

@Component({
  selector: 'app-component',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  playersList: IPlayer[] = [];

  team1: IPlayer[] = [];
  team2: IPlayer[] = [];

  constructor(private service: PlayersService) {
    this.load(service.getPlayers());
  }

  load(source: IPlayer[]) {
    this.playersList = source;
    this.team1 = source.filter(p => p.team == 1);
    this.team2 = source.filter(p => p.team == 2);
  }

  randomSort(arr: IPlayer[]): IPlayer[] {
    const set = new Set<IPlayer>(arr);
    const uniqueArr = Array.from(set);
    for (let i = uniqueArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [uniqueArr[i], uniqueArr[j]] = [uniqueArr[j], uniqueArr[i]];
    }
    return uniqueArr;
  }

  sort() {
    let sorted = this.randomSort(this.playersList);
    this.load(sorted);
  }
}
