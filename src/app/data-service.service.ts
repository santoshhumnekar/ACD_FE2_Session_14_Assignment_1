import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map' ;

@Injectable()
export class DataServiceService {

  private _url : string = "/data.json" ;

  constructor( private _http : Http) { }

  getData(){
    return this._http.get(this._url)
    .map((res:Response)=> res.json());
  }

}
