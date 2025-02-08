export interface Feat {
    id: string;
    name: string;
    description: string;
    fullDescription: string;
    images: string[];
    featList: FeatDetail[];
}
export interface FeatDetail {
    name: string;
    description: string;
    level: string;
    type: string;
}
