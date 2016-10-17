import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Game} from "../models/games.model";

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})

export class GamesComponent implements OnInit {

  public game: any;

  constructor(private httpService: Http) {
    this.game = null;
  }

  ngOnInit() {
    this.httpService.get('../../assets/test.json').subscribe(result => {
      this.game = result.json();
      // console.log(result.json());
      console.log(this.game);
    }, error => console.log(error));
  }

}
