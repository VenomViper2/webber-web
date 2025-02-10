export interface Character {
    id: String;
    name: string;
    player: string;
    description: string;
    xp: number;
    attribute: Attribute[];
    feats: Feats;
    equipment: Equipment[];
    inventory: string[];
}

export interface Attribute {
    name: string;
    level: number;
    skills: Skills;
}

export interface Skills {
    attack?: number;
    force?: number;
    endurance?: number;
    intimidation?: number;
    athletics?: number;
    defence?: number;
    initiative?: number;
    stealth?: number;
    toxicology?: number;
    preparation?: number;
    swindling?: number;
    search?: number;
    study?: number;
    survival?: number;
    beastiology?: number;
    awareness?: number;
    scrutiny?: number;
    charm?: number;
    deception?: number;
    composure?: number;
}

export interface Feats {
    red: number;
    green: number;
    blue: number;
    gold: number;
}

export interface Equipment {
    name: string;
    size: number;
    attributes: string[];
}