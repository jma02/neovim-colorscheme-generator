import React from "react";
// Chakra
import { Box, Text} from "@chakra-ui/react";
import {Card, CardBody} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Heading, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button} from "@chakra-ui/react";


import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";

const presetCards =  [
    "red.400", "orange", "green", "teal", "blue",
    "cyan", "purple.400", "purple.800", "pink", "white"];

const themeProps = [
    "Accent", "Background", "Foreground", "UI", "Function",
    "String", "Operator", "Comment", "Error"
];

//Routing
import {Link} from "react-router-dom";
//DnD
import DragColor from "../components/DragColor";
import ColorBucket from "../components/ColorBucket";
import ColorPicker from "../components/ColorPicker";

// 3. Pass the `theme` prop to the `ChakraProvider`
export default function Landing() {
    return (
        <div style={{padding: 40}}>
            <Heading height="75px">Neovim Theme Generator</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <div>
                    <Text height="40px">Drag and drop colors to get started!</Text>
                    <Tabs>
                        <TabList>
                            <Tab>Presets</Tab>
                            <Tab>Color Picker</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>

                                <Card variant="filled">
                                    <CardBody>
                                        <Grid templateColumns="repeat(5,1fr)" gap={2}>
                                            {presetCards.map((x: string)=>(
                                                <DragColor key={x} fillColor={x}/>
                                            ))}
                                        </Grid>
                                    </CardBody>
                                </Card>
                            </TabPanel>
                            <TabPanel>
                                <Card variant="filled">
                                    <CardBody>
                                        <ColorPicker/>
                                    </CardBody>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Box padding="1rem">
                        <Card variant="filled">
                            <CardBody>
                                <Grid templateColumns="repeat(3,1fr)" gap={2}>
                                    {themeProps.map((x: string)=>(
                                        <div key={x}>
                                            <Text fontSize="10">{x}</Text>
                                            <div>
                                                <ColorBucket/>
                                            </div>
                                        </div>
                                    ))}
                                </Grid>
                            </CardBody>
                        </Card>
                    </Box> 
                </div>
                <div>
                    <b>Preview</b>
                    <Image boxSize="lg" src="https://via.placeholder.com/500x300/0077be/ffffff?text=Placeholder+Image"></Image>
                    <Button colorScheme="blue">Download .lua File</Button>
                </div>
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat.
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
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                              commodo consequat.
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                    <div style={{bottom: 0, position: "absolute"}}>
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
            </Grid>
        </div>
    );
}