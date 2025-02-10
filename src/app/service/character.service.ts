import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { Character } from '../model/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private characters: Character[] = [];

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.http.get<{ characters: Character[] }>('data/characters.json')
            .pipe(
                    map(response => response.characters),
                    tap(characters => this.characters = characters)
            );
  }

  getCharacter(id: string): Observable<Character | undefined> {
    return this.getAllCharacters().pipe(
            map(characters => characters.find(character => character.id === id))
    );
  }
}