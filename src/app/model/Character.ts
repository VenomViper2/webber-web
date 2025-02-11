export interface Character {
    id: String;
    name: string;
    player: string;
    description: string;
    xp: number;
    attribute: CharacterAttribute[];
    feats: string[];
    equipment: CharacterEquipment[];
    inventory: string[];
}

export interface CharacterAttribute {
    name: string;
    level: number;
    skills: CharacterSkills;
}

export interface CharacterSkills {
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

export interface CharacterEquipment {
    name: string;
    size: number;
    attributes: string[];
}