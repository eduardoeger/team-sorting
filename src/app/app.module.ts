import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './player-component/player.component';
import { TeamPlayerComponent } from './team-player-component/team-player.component';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { ChangePlayerComponent } from './change-player/change-player.component';
import { SoccerFieldComponent } from './soccer-field/soccer-field.component';

@NgModule({
  declarations: [AppComponent, PlayerComponent, TeamPlayerComponent, TeamListComponent, ChangePlayerComponent, SoccerFieldComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports: [PlayerComponent, TeamPlayerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
