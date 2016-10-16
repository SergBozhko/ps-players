import { Component, OnInit } from '@angular/core';

import { IGame } from '../models/games.model';
import { Game } from '../models/games.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  games: IGame[];

  constructor() {
    this.games = [
      {
        title: 'GTA 5',
        description: 'Cool game!',
        price: 3500,
        rate: 5
      }
    ];
  }

  addGame(title: string) {

    let game = new Game(title, 'Test', 2500, 4);

    this.games.push(game);

    console.log('Game added');

  }

  ngOnInit() {}

}
