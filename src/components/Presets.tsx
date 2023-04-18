import React from "react";
import { Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, Box, Button, Grid, Select } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Presets():JSX.Element{
    return(
        <div>
            <Button colorScheme="blue">
                <Link to="edit">Edit Presets</Link>
            </Button>
            <Accordion>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                      Presets
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                              Placeholder
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
                    <Select placeholder='Select option'>
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