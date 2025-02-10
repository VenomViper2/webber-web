export interface CombatAction {
    name: string;
    description: string;
    type: 'Standard' | 'Reaction';
    refresh?: string;
}

export interface Movement {
    standardMove: string;
    actionsPerTurn: number;
    reactionsPerTurn: number;
}

export interface BasicFeat {
    name: string;
    effect: string;
    type: string;
}

export interface DerivedStat {
    formula: string;
    baseValue?: number;
}

export interface DerivedStats {
    health: DerivedStat;
    willpower: DerivedStat;
    defence: DerivedStat;
    boonLimit: DerivedStat;
}

export interface ExperienceCost {
    formula?: string;
    cost?: number;
    type: 'Multiplicative' | 'Fixed';
}

export interface ExperienceCosts {
    attribute: ExperienceCost;
    skill: ExperienceCost;
    feat: ExperienceCost;
    attunement: ExperienceCost;
}

export interface RankThreshold {
    value: number;
    rank: number;
}

export interface RankSystem {
    calculation: string;
    thresholds: RankThreshold[];
    featRequirement: string;
}

export interface HelpMechanics {
    diceBonus: string;
    nudgeBonus: string;
    boonUsage: string;
    leadership: string;
}

export interface ExtendedTaskComponent {
    name: string;
    description: string;
}

export interface BoonTrigger {
    trigger: string;
    type: string;
}

export interface Characteristics {
    derivedStats: DerivedStats;
}

export interface GameMechanics {
    combatActions: {
        baseActions: CombatAction[];
        reactions: CombatAction[];
        movement: Movement;
    };
    basicFeats: BasicFeat[];
    extendedTasks: {
        components: ExtendedTaskComponent[];
    };
    boonTriggers: BoonTrigger[];
    helpSystem: {
        mechanics: HelpMechanics;
    };
    characteristics: Characteristics;
    experienceCosts: ExperienceCosts;
    rankSystem: RankSystem;
}