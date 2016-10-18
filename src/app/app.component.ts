import { Component } from '@angular/core';
import {Game} from "./models/games.model";
import {Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public game: any;
  private url = '../../assets/test.json';

  constructor(private http: Http) {

  }

  public getGames(): Promise<Game> {
    return this.http.get(this.url)
      .toPromise()
      .then(data => {
        this.game = data.json();
        console.log(this.game.title);
      })
      .catch(this.handleError);
  }

  public handleError() {

  }

  ngOnInit() {
    this.getGames();
  }
}
