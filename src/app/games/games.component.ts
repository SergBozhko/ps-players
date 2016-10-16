import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  games: string[];

  constructor() {
    this.games = ['TES Online', 'Battlefield 1', 'GTA 5'];
  }

  addGame(game: string) {
    this.games.push(game);
    console.log('Game added');
  }

  ngOnInit() {}

}
