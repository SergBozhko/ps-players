import {Injectable, Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class RestService {

  constructor(private http: Http, @Inject(Http) private _http:Http) {
    let _build = (<any> _http)._backend._browserXHR.build;
    (<any> _http)._backend._browserXHR.build = () => {
      let _xhr = _build();
      _xhr.withCredentails = true;
      return _xhr;
    }
  }

  public getData(url: string): Observable<any> {
    return this.http
      .get(url)
      .map((data: Response) => data.json());
  }

}
