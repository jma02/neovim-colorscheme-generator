import React, { useState } from "react";
// Chakra
import { Heading, Grid, Box, Text, Button} from "@chakra-ui/react";

import Editor from "../components/Editor";
import Preview from "../components/Preview";
import Presets from "../components/Presets";
import { ThemeFile } from "../components/Common";

import { Link } from "react-router-dom";
// 3. Pass the `theme` prop to the `ChakraProvider`
export default function Landing() {
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

    return (
        <Box>
            <div style={{padding: 40}}>
                <Heading height="100%" width="100%">
                    <Text fontSize="32">Neovim Theme Generator</Text>
                </Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                    <Editor themeFile={themeFile} setThemeFile={setThemeFile}/>
                    <Preview themeFile={themeFile} setThemeFile={setThemeFile}/>
                    <Box>
                        <Button colorScheme="blue">
                            <Link to="edit">Edit Presets</Link>
                        </Button>
                        <Presets/> 
                    </Box>
                </Grid>
            </div>
            <Box as="footer" p={4} bg="blue.800" textAlign="center" width="100%">
                <Text>Team 2: Aidan Eyre, Brendan Lewis, Eli Brignac, Jonathan Ma</Text>
            </Box>
        </Box>
    );
}