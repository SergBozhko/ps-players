import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Game} from "../models/games.model";

@Injectable()
export class RestService {

  public item: Game;

  constructor(private http: Http) { }

  public getData(url: string): Observable<Game> {
    return this.http
      .get(url)
      .map((data: Response) => this.item = data.json());
  }

}
