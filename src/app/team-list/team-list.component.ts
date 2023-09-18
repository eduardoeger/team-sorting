import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { TeamPlayerComponent } from "../team-player-component/team-player.component";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent {

  @Input() teamList: string[] = [];

  @ViewChildren(TeamPlayerComponent)
  teamPlayers!: QueryList<TeamPlayerComponent>;

  drop(event: CdkDragDrop<string[]>) {
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
    }
  }

  getTotalRating(team: number): number | undefined {
    if (!this.teamPlayers) return;

    let ratings = this.teamPlayers
      .filter((player) => player.team == team)
      .map((player) => player.rating);

    return ratings.reduce((total, currentNumber) => total + currentNumber, 0);
  }
}
