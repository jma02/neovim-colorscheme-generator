import { Preset } from "./Common";

// Pre mongo instanceo
export const DevPresetList: Preset[] = [
    {
        name: "Default",
        description: "Old Faithful",
        ThemeFile: {
            accent: "#FF9940",
            bg: "#FAFAFA",
            fg: "#575F66",
            ui: "#8A9199",
            string: "#86B300",
            func: "#F2AE49",
            operator: "#ED9366",
            comment: "#ABB0B6",
            error:  "#F51818",
        },
        upvotes: 1000
    },
    {
        name: "Mad Dog",
        description: "For when you need to code 20000 lines before your marathon.",
        ThemeFile: {
            "accent":"#d01111",
            "bg":"#691919",
            "fg":"#575F66",
            "ui":"#e91f32",
            "string":"#ebe3ef",
            "func":"#F2AE49",
            "operator":"#ED9366",
            "comment":"#ABB0B6",
            "error":"#F51818"
        },
        upvotes: 666
    },
    {
        name: "Merge Conflict",
        description: "git lit",
        ThemeFile: {
            "accent":"#1d0a57",
            "bg":"#f2ebf6",
            "fg":"#575F66",
            "ui":"#b9aedf",
            "string":"#00030f",
            "func":"#9445c2",
            "operator":"#0c1c7e",
            "comment":"#ABB0B6",
            "error":"#F51818"
        },
        upvotes: 1000
    },
    {
        name: "Shoot House",
        description: "Go nuclear.",
        ThemeFile: {
            "accent":"#7c7c40",
            "bg":"#f1f1ea",
            "fg":"#690e69",
            "ui":"#99a3a9",
            "string":"#579969",
            "func":"#a57ea5",
            "operator":"#769bb6",
            "comment":"#ABB0B6",
            "error":"#F51818"
        },
        upvotes: 30
    },
    {
        name: "Columbia",
        description: "King and country.",
        ThemeFile: {
            "accent":"#4e6955",
            "bg":"#c0c5d0",
            "fg":"#ffffff",
            "ui":"#8A9199",
            "string":"#425a9d",
            "func":"#211f1f",
            "operator":"#4e6955",
            "comment":"#9d8ca3",
            "error":"#F51818"
        },
        upvotes: 1000
    },
    {
        name: "Reyna",
        description: "Fabulous.",
        ThemeFile: {
            "accent":"#f1e5ee",
            "bg":"#302a2a",
            "fg":"#e2d7e5",
            "ui":"#8A9199",
            "string":"#f1a9e0",
            "func":"#c59cce",
            "operator":"#dd4bb2",
            "comment":"#b372c0",
            "error":"#F51818"
        },
        upvotes: 5
    }   
];