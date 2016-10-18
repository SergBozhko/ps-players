import {Component, OnInit} from '@angular/core';
import {Game} from "../models/games.model";
import {RestService} from "../shared/rest.service";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  public game: Observable<Game>;

  constructor(private rest: RestService) {

  }
  // TODO: разобраться почему возвращаются данные в виде Observable
  ngOnInit(): void {
    this.game = this.rest.getData('../../assets/test.json');
    console.log(this.game);
  }

}
