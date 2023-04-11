import React from "react";
// Chakra
import { extendTheme, ChakraProvider, Box } from "@chakra-ui/react";
import {Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Heading, Grid } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from "@chakra-ui/react";
const colors = {
    brand: {
        900: "#1a365d",
        800: "#153e75",
        700: "#2a69ac",
    },
};

const theme = extendTheme({ colors });

//Routing
import {Link} from "react-router-dom";
// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <Heading>Neovim Theme Generator</Heading>
            <Grid templateColumns="repeat(3, 1fr)" gap={6}>
                <div>
                    <Tabs>
                        <TabList>
                            <Tab>Presets</Tab>
                            <Tab>Color Wheel</Tab>
                            <Tab>Hexcode</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>

                                <Card>
                                    <CardBody>
                                      Col 1
                                    </CardBody>
                                </Card>
                            </TabPanel>
                            <TabPanel>
                                <Card>
                                    <CardBody>
                                      Col 2
                                    </CardBody>
                                </Card>
                            </TabPanel>
                            <TabPanel>
                                <Card>
                                    <CardBody>
                                      Col 3
                                    </CardBody>
                                </Card>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                    <Card>
                        <CardBody>
                        Drag and Drops
                        </CardBody>
                    </Card>
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
        </ChakraProvider>
    );
}