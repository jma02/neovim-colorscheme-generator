import React from "react";
import { Box, Card, CardBody, Grid, Tab, 
    TabList, TabPanel, TabPanels, Tabs, Text} from "@chakra-ui/react";
import DragColor from "./DragColor";
import ColorPicker from "./ColorPicker";
import ColorBucket from "./ColorBucket";
import { ThemeFile } from "./Common";

const presetCards =  [
    "#DA4B4B", "#F3CA7B", "#2E9A1E", "#1E9A81", "#252DDA",
    "#3DD8D3", "#9134AF", "#43148E", "#DE42D8", "#FFFFFF"];

interface EditorProps {
    themeFile: ThemeFile;
    setThemeFile: (x: ThemeFile) => void;
}
export default function Editor({themeFile, setThemeFile}: EditorProps): JSX.Element{
    return(
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
                            {Object.keys(themeFile).map((x: string)=>(
                                <div key={x}>
                                    <Text fontSize="10">{x}</Text>
                                    <div>
                                        <ColorBucket
                                            theme={themeFile}
                                            setThemeFile={setThemeFile}
                                            prop={x}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Grid>
                    </CardBody>
                </Card>
            </Box> 
        </div>    
    );
}