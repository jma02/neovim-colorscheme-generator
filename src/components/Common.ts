import { ObjectId } from "bson";

export interface DroppedColor {
    fillColor: string
}

export interface ThemeFile {
    accent: string,
    bg: string,
    fg: string,
    ui: string,
    string: string, // lol
    func: string,
    operator: string,
    comment: string,
    error: string,
}

// this could be cleaned up, later.
export interface DroppedPreset{
    _id: ObjectId;
    ThemeFile: ThemeFile;
    name: string;
    description: string;
    upvotes: number;
}

export interface PostFragment{
// preset without _id --- _id is assigned by MongoDB
    name: string;
    description: string;
    ThemeFile: ThemeFile;
    upvotes: number;
}

export interface Preset{
    _id: ObjectId;
    name: string;
    description: string;
    ThemeFile: ThemeFile;
    upvotes: number;
}