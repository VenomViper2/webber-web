import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { map, Observable, tap } from "rxjs";
import { Feat } from "../model/Feat";

@Injectable({
  providedIn: 'root'
})
export class FeatService {
  private feats: Feat[] = [];

  constructor(private http: HttpClient) {
  }

  getAllFeats(): Observable<Feat[]> {
    return this.http.get<{ feats: Feat[] }>('data/feats.json')
            .pipe(
                    map(response => response.feats),
                    tap(feats => this.feats = feats)
            );
  }

  getFeat(id: string): Observable<Feat | undefined> {
    return this.getAllFeats().pipe(
            map(feats => feats.find(feat => feat.id === id))
    );
  }

}
