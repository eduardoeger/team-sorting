import { Component, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { IPlayer } from "../../abstractions/IPlayer";
import { PlayersService } from "../../services/players.service";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  @Input() teamList: IPlayer[] = [];
  @Input() team: number = 1;

  constructor(private service: PlayersService) {
  }

  drop(event: CdkDragDrop<IPlayer[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );

      let droppedItem = event.container.data[event.currentIndex];
      droppedItem.team = this.team;
      this.service.save(droppedItem);
    }
  }

  getTotalRating(): number | undefined {
    let ratings = this.teamList
      .map((player) => player.rating);

    return ratings.reduce((total, currentNumber) => total + currentNumber, 0);
  }
}
