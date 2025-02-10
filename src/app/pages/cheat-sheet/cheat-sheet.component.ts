// game-mechanics.component.ts

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AsyncPipe, NgClass, NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { combineLatest, map, Observable, Subject } from 'rxjs';
import { shareReplay, takeUntil } from 'rxjs/operators';
import { CheatSheetService } from "../../service/cheat-sheet.service";
import {
  BasicFeat,
  BoonTrigger,
  Characteristics,
  CombatAction,
  ExperienceCosts,
  RankSystem
} from "../../model/CheetSheet";

interface ViewModelState {
  combatActions: CombatAction[];
  basicFeats: BasicFeat[];
  characteristics: Characteristics;
  rankSystem: RankSystem;
  experienceCosts: ExperienceCosts;
  boonTriggers: BoonTrigger[];
}
@Component({
  selector: 'app-cheat-sheet',
  standalone: true,
  imports: [AsyncPipe, NgForOf, NgIf, NgClass, UpperCasePipe, TitleCasePipe],
  templateUrl: './cheat-sheet.component.html',
  styleUrl: './cheat-sheet.component.css'
})
export class CheatSheetComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  title = 'Cheat Sheet';
  viewModel$: Observable<ViewModelState>;

  constructor(private gameMechanicsService: CheatSheetService) {
    this.viewModel$ = this.initializeViewModel();
  }

  private initializeViewModel(): Observable<ViewModelState> {
    return combineLatest({
      mechanics: this.gameMechanicsService.getAllMechanics(),
      combatActions: this.gameMechanicsService.getCombatActions(),
      basicFeats: this.gameMechanicsService.getBasicFeats(),
    }).pipe(
            map(({ mechanics, combatActions, basicFeats }) => ({
              combatActions,
              basicFeats,
              characteristics: mechanics.characteristics,
              rankSystem: mechanics.rankSystem,
              experienceCosts: mechanics.experienceCosts,
              boonTriggers: mechanics.boonTriggers
            })),
            shareReplay(1),
            takeUntil(this.destroy$)
    );
  }

  getStatsEntries(stats: Record<string, any>): Array<{ name: string; formula: string; baseValue?: number }> {
    return Object.entries(stats).map(([name, stat]) => ({
      name,
      formula: stat.formula,
      baseValue: stat.baseValue
    }));
  }

  getExperienceCostEntries(costs: Record<string, any>): Array<{ type: string; formula?: string; cost?: number }> {
    return Object.entries(costs).map(([type, details]) => ({
      type,
      formula: details.formula,
      cost: details.cost
    }));
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}