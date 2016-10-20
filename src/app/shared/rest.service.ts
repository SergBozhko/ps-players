import {Injectable, Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Game} from "../models/games.model";

@Injectable()
export class RestService {

  public item: Game;

  constructor(private http: Http, @Inject(Http) private _http:Http) {
    let _build = (<any> _http)._backend._browserXHR.build;
    (<any> _http)._backend._browserXHR.build = () => {
      let _xhr = _build();
      _xhr.withCredentails = true;
      return _xhr;
    }
  }

  public getData(url: string): Observable<Game> {
    return this.http
      .get(url)
      .map((data: Response) => this.item = data.json());
  }

}
