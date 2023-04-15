import React, { useState } from "react";
// Chakra
import { Heading, Grid } from "@chakra-ui/react";

interface ThemeFile {
    [name: string] : string; 
}

import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Presets from "../components/Presets";

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function Landing() {
    const [themeFile, setThemeFile] = useState<ThemeFile>(
        {
            "Accent": "#ffffff",
            "Background": "#ffffff",
            "Foreground": "#ffffff",
            "UI": "#ffffff",
            "String": "#ffffff",
            "Function": "#ffffff",
            "Operator": "#ffffff",
            "Comment": "#ffffff",
            "Error":  "#ffffff",
        }
    );
    
    return (
        <div style={{padding: 40}}>
            <Heading height="75px">Neovim Theme Generator</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Editor themeFile={themeFile} setThemeFile={setThemeFile}/>
                <Preview themeFile={themeFile}/>
                <Presets/> 
            </Grid>
        </div>
    );
}