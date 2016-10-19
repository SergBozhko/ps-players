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

  public game: Game;

  constructor(private rest: RestService) {

  }

  ngOnInit(): void {
    this.rest.getData('../../assets/test.json')
      .subscribe(res => {
        this.game = res;
        console.log(res);
      },
        error => { console.log(error);
      });

  }

}
