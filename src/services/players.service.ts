import { Injectable } from "@angular/core";
import { IPlayer } from "../abstractions/IPlayer";

@Injectable({providedIn: "root"})
export class PlayersService {

  readonly playerStorageKey: string = 'players';

  getPlayers(): IPlayer[] {
    let cached = localStorage.getItem(this.playerStorageKey);

    if (!cached)
      return [];

    return JSON.parse(cached) as IPlayer[];
  }

  save(player: IPlayer) {
    let currentPlayers = this.getPlayers();
    let currentPlayer = currentPlayers.find(p => p.id == player.id);

    if (currentPlayer)
      currentPlayers = currentPlayers.filter(p => p.id != currentPlayer!.id);

    currentPlayers.push(player);
    localStorage.setItem(this.playerStorageKey, JSON.stringify(currentPlayers));
  }

  unsave(id: string) {
    let currentPlayers = this.getPlayers();
    currentPlayers = currentPlayers.filter(p => p.id != id);
    localStorage.setItem(this.playerStorageKey, JSON.stringify(currentPlayers));
  }

}