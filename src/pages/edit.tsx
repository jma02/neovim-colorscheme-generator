import React, { useState } from "react";
import { Heading, Grid, Box, Button, Flex, Spacer} from "@chakra-ui/react";
import Preview from "../components/Preview";
import { Preset, ThemeFile } from "../components/Common";
import Editor from "../components/Editor";
import Presets from "../components/Presets";
import {Link} from "react-router-dom";
import PresetPostButton from "../components/PresetPostButton";

interface PageProps{
    user: Realm.User | null;
    setUser: (x: Realm.User | null) => void; 
}

export default function Edit({user, setUser}: PageProps){
    const [presets, setPresets]= useState<Preset[]>([]);
    const [themeFile, setThemeFile] = useState<ThemeFile>(
        {
            accent: "#FF9940",
            bg: "#FAFAFA",
            fg: "#575F66",
            ui: "#8A9199",
            string: "#86B300",
            func: "#F2AE49",
            operator: "#ED9366",
            comment: "#ABB0B6",
            error:  "#F51818",
        }
    );
    return(
        <div style={{padding: 30}}>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Box>
                    <Flex>
                        <Heading height="100%" fontSize="32">Preset Creator (Admin)</Heading>
                        <Spacer/>
                        <PresetPostButton ThemeFile={themeFile} setPresets={setPresets}/>
                    </Flex>
                    <Preview themeFile={themeFile} setThemeFile={setThemeFile}></Preview>
                </Box>
                <Editor themeFile={themeFile} setThemeFile={setThemeFile}></Editor>
                <Box>
                    <Button bg="blue.300">
                        <Link to="/">Back to Main Site</Link>
                    </Button>
                    <Presets 
                        themeFile={themeFile} 
                        presets={presets}
                        setPresets={setPresets}
                        user={user}
                        setUser={setUser}
                    /> 
                </Box>
            </Grid>
        </div>
    );
}