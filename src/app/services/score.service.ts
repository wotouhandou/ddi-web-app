import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Http} from "@angular/http";
import {AppConfig} from "../app.config";
import {BaseService} from "./base.service";

@Injectable()
export class ScoreService extends BaseService {

  constructor(private http: Http, private appConfig: AppConfig) {
    super();
  }

  public getViews(source: string, acc: string): Observable<number>{
      return this.http.get(this.appConfig.getScoreViewsUrl(acc,source))
        .map(x => {
          let o = x.json();
          if(o) {
              return o;
          }
          return 0;
          });
  }

  public getCitations(source: string, acc: string): Observable<number>{
    return this.http.get(this.appConfig.getScoreCitationsUrl(acc,source))
        .map(x => {
          let o = this.extractData<Object>(x);
          if(o){
              return o["pubmedCount"];
          }
          return 0;
        });
  }
  public getReanalysis(source: string, acc: string): Observable<number>{
    return this.http.get(this.appConfig.getScoreReanalysisUrl(acc,source))
        .map(x => {
          let o = this.extractData<Object>(x);
          if(o){
              return o["total"];
          }
          return 0;
        });
  }

  public getConnections(source: string, acc: string): Observable<number>{
    return this.http.get(this.appConfig.getScoreConnectionsUrl(source,acc))
        .map(x => {
          let o = this.extractData<Object>(x);
          if(o) {
              return o["pubmedCount"];
          }
          return 0;
        });
  }

}