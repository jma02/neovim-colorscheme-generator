import React, { useState } from "react";
// Chakra
import { Heading, Grid, Button } from "@chakra-ui/react";

//Routing
import {Link} from "react-router-dom";
import Preview from "../components/Preview";
import { ThemeFile } from "../components/Common";
import Editor from "../components/Editor";
import Presets from "../components/Presets";

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
            <Heading height="75px">Approve This Theme?</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={12}>
                <Preview themeFile={themeFile}></Preview>
                <Editor themeFile={themeFile} setThemeFile={setThemeFile}></Editor>
                <Presets></Presets>
                <Button><Link to="/">Back to main site</Link></Button>
            </Grid>
        </div>
    );
}