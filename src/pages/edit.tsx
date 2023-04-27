import React, { useState } from "react";
// Chakra
import { Heading, Grid, Box, Button} from "@chakra-ui/react";

//Routing
import Preview from "../components/Preview";
import { ThemeFile } from "../components/Common";
import Editor from "../components/Editor";
import Presets from "../components/Presets";
import {Link} from "react-router-dom";
export default function Edit(){
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
        <div style={{padding: 40}}>
            <Heading height="100%" fontSize="32">Approve This Theme?</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <Preview themeFile={themeFile} setThemeFile={setThemeFile}></Preview>
                <Editor themeFile={themeFile} setThemeFile={setThemeFile}></Editor>
                <Box>
                    <Button>
                        <Link to="/">Back to Main Site</Link>
                    </Button>
                    <Presets/> 
                </Box>
            </Grid>
        </div>
    );
}