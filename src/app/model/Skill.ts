export interface Skill {
    name: string;
    description: string;
}

export interface SkillLevel {
    name: string;
    ability: string;
}

export interface LevelSystem {
    maxLevel: number;
    levels: {
        [key: string]: SkillLevel;
    };
}

export interface SearchAwarenessRules {
    search: string;
    awareness: string;
}

export interface SpecialRules {
    searchVsAwareness: SearchAwarenessRules;
}

export interface AttributeSkills {
    [key: string]: Skill;
}

export interface Attribute {
    name: string;
    skills: AttributeSkills;
}

export interface Attributes {
    power: Attribute;
    finesse: Attribute;
    mind: Attribute;
    heart: Attribute;
}

export interface SkillSystem {
    levelSystem: LevelSystem;
    attributes: Attributes;
    specialRules: SpecialRules;
}

export interface SkillSystemRoot {
    skillSystem: SkillSystem;
}