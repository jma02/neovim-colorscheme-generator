import React from "react";
import { Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, Box, Button, 
    Grid, Select} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DragPreset from "./DragPreset";

import { Preset } from "./Common";
import {useState, useEffect} from "react";
import * as Realm from "realm-web";

export default function Presets():JSX.Element{
    const [presets, setPresets] = useState<Preset[]>([]);
    useEffect(() => {
        const REALM_APP_ID = process.env.REACT_APP_MONGO_APP_ID as string;
        const app = new Realm.App({id : REALM_APP_ID});
        const api_key = process.env.REACT_APP_MONGO_REALM_API_KEY as string;
        const credentials = Realm.Credentials.apiKey(api_key);
        app.logIn(credentials)
            .then(user => {
                return user.functions.fetch_presets();
            })
            .then(allPresets => {
                setPresets(allPresets);
                console.log(allPresets);
                // console.log(DevPresetList);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);
    return(
        <div>
            <Button colorScheme="blue">
                <Link to="edit">Edit Presets</Link>
            </Button>
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
                                Placeholder
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