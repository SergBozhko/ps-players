import {Component, OnInit} from '@angular/core';
import {Game} from "../models/games.model";
import {RestService} from "../shared/rest.service";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  public games: Game;

  constructor(private rest: RestService) {

  }

  ngOnInit(): void {
    this.rest.getData('http://localhost:8080/api/games')
      .subscribe(res => {
        this.games = res;
        console.log(res);
      },
        error => { console.log(error);
      });

  }

}
