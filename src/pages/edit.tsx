import React from "react";
// Chakra
import { extendTheme, ChakraProvider, Box, Text} from "@chakra-ui/react";
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
const presetCards =  [
    "red.400", "orange", "green", "teal", "blue",
    "cyan", "purple.400", "purple.800", "pink", "white"];

const themeProps = [
    "Accent", "Background", "Foreground", "UI", "Function",
    "String", "Operator", "Comment", "Error"
];
const theme = extendTheme({ colors });

//Routing
import {Link} from "react-router-dom";

export default function Edit(){
    return(
        <ChakraProvider theme={theme}>
            <div style={{padding: 40}}>
                <Heading height="75px">Approve This Theme?</Heading>
                <Grid templateColumns="repeat(3, 1fr)" gap={12}>
                    <div>
                        <b>Admin List Theme</b>
                        <Image boxSize="lg" src="https://via.placeholder.com/500x300/0077be/ffffff?text=Placeholder+Image"></Image>
                        <Button colorScheme="blue">Download .lua File</Button>
                    </div>
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
                                            <Grid templateColumns="repeat(5,1fr)" gap={2}>
                                                {presetCards.map((x: string)=>(
                                                    <Card key={x} backgroundColor={x} variant="filled" size="lg">
                                                        <CardBody></CardBody>
                                                    </Card>
                                                ))}
                                            </Grid>
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
                                <Grid templateColumns="repeat(3,1fr)" gap={2}>
                                    {themeProps.map((x: string)=>(
                                        <div key={x}>
                                            <Text fontSize="10">{x}</Text>
                                            <Card size="lg">
                                                <CardBody></CardBody>
                                            </Card>
                                        </div>
                                    ))}
                                </Grid>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                        <Accordion>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton>
                                        <Box as="span" flex='1' textAlign='left'>
                                      Presets (Select to Edit)
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
                            <Button colorScheme="green" >Create new Preset</Button>
                            <Button colorScheme="blue" >
                                <Link to="/">Back to main site</Link>
                            </Button>
                        </div>
                    </div>
                </Grid>
            </div>
        </ChakraProvider>    
    );
}