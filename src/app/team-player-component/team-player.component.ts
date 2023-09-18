import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-player',
  templateUrl: './team-player.component.html',
  styleUrls: ['./team-player.component.scss'],
})
export class TeamPlayerComponent {
  @Input() name: string = '';
  @Input() team: number = 1;

  rating: number = 3;
  ratingArr: number[] = [1, 2, 3, 4, 5];

  showIcon(index: number) {
    return this.rating >= index + 1 ? 'star' : 'minimize';
  }
}
