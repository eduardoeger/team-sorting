import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss'],
})
export class PlayerComponent {
  @Input() name: string = '';

  imageExists(player: string) {
    if (player == 'eidu' || player == 'leo') return true;

    return false;
  }

  getImageSrc(player: string) {
    return `${player}.jpg`;
  }
}
