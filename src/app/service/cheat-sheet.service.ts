import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay, catchError, retry } from 'rxjs/operators';
import {
  BasicFeat,
  Characteristics,
  CombatAction,
  CheetSheet,
  RankSystem,
  ExperienceCosts
} from "../model/CheetSheet";

@Injectable({
  providedIn: 'root'
})
export class CheatSheetService {
  private readonly MECHANICS_URL = 'data/cheat-sheet.json';
  private readonly RETRY_ATTEMPTS = 3;
  private mechanicsData$: Observable<CheetSheet>;

  constructor(private http: HttpClient) {
    this.mechanicsData$ = this.initializeMechanicsData();
  }

  private initializeMechanicsData(): Observable<CheetSheet> {
    return this.http.get<CheetSheet>(this.MECHANICS_URL).pipe(
            retry(this.RETRY_ATTEMPTS),
            catchError(this.handleError),
            shareReplay(1)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
            ? `Client-side error: ${error.error.message}`
            : `Server error: ${error.status} ${error.message}`;

    console.error('CheetSheetService error:', errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  getCombatActions(): Observable<CombatAction[]> {
    return this.mechanicsData$.pipe(
            map(data => [...data.combatActions.baseActions, ...data.combatActions.reactions])
    );
  }

  getBasicFeats(): Observable<BasicFeat[]> {
    return this.mechanicsData$.pipe(
            map(data => data.basicFeats)
    );
  }


  getAllMechanics(): Observable<CheetSheet> {
    return this.mechanicsData$;
  }
}