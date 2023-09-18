import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { PlayerComponent } from './player-component/player.component';
import { TeamPlayerComponent } from './team-player-component/team-player.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, PlayerComponent, TeamPlayerComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
  ],
  exports: [PlayerComponent, TeamPlayerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
