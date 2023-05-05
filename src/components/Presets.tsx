import React from "react";
import { Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, Box, Button, 
    Grid, Select, Spinner, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DragPreset from "./DragPreset";

import { Preset } from "./Common";
import {useState, useEffect} from "react";
import * as Realm from "realm-web";

import fetch_presets from "../functions/fetch_presets";

interface PresetsProps{
    presets: Preset[];
    setPresets: (x: Preset[]) => void;
}

export default function Presets({presets, setPresets}: PresetsProps):JSX.Element{
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
            <div style={{top: 0, position: "relative"}}>
                <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                    <Select placeholder='Select user' fontSize="15">
                        <option value='option1'>Option 1</option>
                        <option value='option2'>Option 2</option>
                        <option value='option3'>Option 3</option>
                    </Select>
                    <Button colorScheme="blue" >
                        <Link to="users">Edit Users</Link>
                    </Button>
                </Grid>
            </div>
        </div>
    );
}