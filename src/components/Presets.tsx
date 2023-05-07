import React from "react";
import { Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, Box, Button, 
    Grid, Spinner, Text} from "@chakra-ui/react";
import DragPreset from "./DragPreset";

import { Preset } from "./Common";
import {useState, useEffect} from "react";

import fetch_presets from "../functions/fetch_presets";
import RegisterUserButton from "./RegisterUserButton";
import LoginButton from "./LoginButton";

interface PresetsProps{
    presets: Preset[];
    setPresets: (x: Preset[]) => void;
}

export default function Presets({presets, setPresets}: PresetsProps):JSX.Element{
    const [user, setUser] = useState<String>("");
    useEffect(() => {
        fetch_presets(setPresets);
    }, []);
    return(
        <div>
            <Accordion defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                      Presets
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} maxHeight="80vh" overflowY="scroll">
                        <Box>
                            {presets.length > 0 ? 
                                <Box>
                                    {presets.map((x: Preset) => (
                                        <div key={x.name}>
                                            <DragPreset 
                                                ThemeFile={x.ThemeFile}
                                                name={x.name}
                                                description={x.description}
                                                upvotes={x.upvotes}
                                            />
                                        </div>
                                    ))
                                    }
                                </Box> : <Box textAlign="center">
                                    <Spinner /> 
                                    <Text fontSize="16" fontWeight="medium">
                                        Loading Presets...
                                    </Text>
                                </Box>
                            }
                        </Box>
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                      Saved Themes
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                    Login to load and save presets!
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <div style={{top: 0, position: "relative", padding: 10}}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    {user === "" ? <LoginButton/> : <Button>{user}</Button>} 
                    <RegisterUserButton/>
                </Grid>
            </div>
        </div>
    );
}