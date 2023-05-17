import React, { useState } from "react";
import { Heading, Grid, Box, Button, Flex, Spacer, Text} from "@chakra-ui/react";
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
        <Box>
            <Flex
                p="3"
                pl="9"
                bg="white"
                boxShadow="md"
                position="sticky"
                textColor="blue.200"
            >
                <Heading as="h1" size="lg" fontFamily="monospace">
                    <Flex gap="0"> 
                        <Text color="green" style={{ whiteSpace: "nowrap" }}>cisc275</Text>
                        <Text color="blue" style={{ whiteSpace: "nowrap" }}>@</Text>
                        <Text color="purple" style={{ whiteSpace: "nowrap" }}>team2</Text>
                        <Text pl="2" color="blue.400" style={{ whiteSpace: "nowrap" }}> ~/Neovim_Colorscheme_Generator</Text>
                    </Flex>
                </Heading>
            </Flex>
            <div style={{padding: 40}}>
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
                            page={"edit"}
                            setThemeFile={setThemeFile}
                        /> 
                    </Box>
                </Grid>
            </div>
            <Box as="footer" p={4} bg="blue.300" textAlign="center" width="100%">
                <Text>Team 2: Aidan Eyre, Brendan Lewis, Eli Brignac, Jonathan Ma</Text>
            </Box>
        </Box>
    );
}