import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, shareReplay, catchError, retry } from 'rxjs/operators';
import {
  BasicFeat,
  Characteristics,
  CombatAction,
  GameMechanics,
  RankSystem,
  ExperienceCosts
} from "../model/GameMechanics";

@Injectable({
  providedIn: 'root'
})
export class GameMechanicsService {
  private readonly MECHANICS_URL = 'data/combat-mechanics.json';
  private readonly RETRY_ATTEMPTS = 3;
  private mechanicsData$: Observable<GameMechanics>;

  constructor(private http: HttpClient) {
    this.mechanicsData$ = this.initializeMechanicsData();
  }

  private initializeMechanicsData(): Observable<GameMechanics> {
    return this.http.get<GameMechanics>(this.MECHANICS_URL).pipe(
            retry(this.RETRY_ATTEMPTS),
            catchError(this.handleError),
            shareReplay(1)
    );
  }

  private handleError(error: HttpErrorResponse) {
    const errorMessage = error.error instanceof ErrorEvent
            ? `Client-side error: ${error.error.message}`
            : `Server error: ${error.status} ${error.message}`;

    console.error('GameMechanicsService error:', errorMessage);
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

  getCharacteristics(): Observable<Characteristics> {
    return this.mechanicsData$.pipe(
            map(data => data.characteristics)
    );
  }

  getRankSystem(): Observable<RankSystem> {
    return this.mechanicsData$.pipe(
            map(data => data.rankSystem)
    );
  }

  getExperienceCosts(): Observable<ExperienceCosts> {
    return this.mechanicsData$.pipe(
            map(data => data.experienceCosts)
    );
  }

  getAllMechanics(): Observable<GameMechanics> {
    return this.mechanicsData$;
  }
}