import React from "react";
import { Accordion, AccordionButton, AccordionIcon,
    AccordionItem, AccordionPanel, Box, Button, 
    Flex, Grid, Spacer, Spinner, Text} from "@chakra-ui/react";
import DragPreset from "./DragPreset";

import { Preset, ThemeFile } from "./Common";
import {useState, useEffect} from "react";

import fetch_presets from "../functions/fetch_presets";
import RegisterUserButton from "./RegisterUserButton";
import LoginButton from "./LoginButton";
import PostUserTheme from "./PostUserTheme";
import DeleteUserPreset from "./DeleteUserPreset";
import DeletePreset from "./DeletePreset";
import CentralToUser from "./CentralToUser";
import fetch_user_presets from "../functions/fetch_user_presets";

/**
 * Wrapper component for Preset viewing, loading, and posting, as well as user login.
   *
   * @param page - tells us which HashRouter page we are on, aids in conditional rendering.
   */

interface PresetsProps{
    themeFile: ThemeFile;
    presets: Preset[];
    setPresets: (x: Preset[]) => void;
    user: Realm.User | null;
    setUser: (x: Realm.User | null) => void;
    page: string;
    setThemeFile: (x: ThemeFile) => void;
}

export default function Presets({themeFile, presets, setPresets, user, setUser, page, setThemeFile}: PresetsProps):JSX.Element{
    const [userThemes, setUserThemes] = useState<Preset[]>([]);
    
    // hook triggers on page load.
    useEffect(() => {
        fetch_presets(setPresets);
        if(user !== null) fetch_user_presets(user.id, setUserThemes);
    }, []);
    return(
        <div>
            <Accordion defaultIndex={[0]}>
                <AccordionItem>
                    <h2>
                        <AccordionButton  _hover={{ textShadow: "0px 0px 1px #ccc" }}>
                            <Box as="span" flex='1' textAlign='left'>
                                      Presets
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        {presets.length > 0 ? 
                            <Box>
                                <Box maxHeight="65vh" overflowY="scroll">
                                    {presets.map((x: Preset) => (
                                        <div key={x._id as unknown as React.Key}>
                                            <DragPreset 
                                                ThemeFile={x.ThemeFile}
                                                name={x.name}
                                                description={x.description}
                                                upvotes={x.upvotes}
                                                _id={x._id}
                                                isUserTheme={false}
                                                userId={""}
                                                setThemeFile={setThemeFile}
                                            />
                                        </div>
                                    ))
                                    }
                                </Box>
                                {page === "edit" && 
                                <Flex p="3" pb='-1' direction="column" alignContent="center" justifyContent="center">
                                    <DeletePreset setThemes={setPresets} />
                                </Flex>
                                }
                            </Box>
                            : <Box textAlign="center">
                                <Spinner /> 
                                <Text fontSize="16" fontWeight="medium">
                                        Loading Presets...
                                </Text>
                            </Box>
                        }
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <CentralToUser user={user} setUserThemes={setUserThemes}/>
                    <AccordionPanel pb={4}>
                        {user === null ? <Text>Login to load and save presets!</Text> : 
                            userThemes.length > 0 ? 
                                <Box>
                                    <Box maxHeight="65vh" overflowY="scroll">
                                        {userThemes.map((x: Preset) => (
                                            <div key={x._id as unknown as React.Key}>
                                                <DragPreset 
                                                    ThemeFile={x.ThemeFile}
                                                    name={x.name}
                                                    description={x.description}
                                                    upvotes={x.upvotes}
                                                    _id={x._id}
                                                    isUserTheme={true}
                                                    userId={user.id}
                                                    setThemeFile={setThemeFile}
                                                />
                                            </div>
                                        ))
                                        }
                                    </Box>
                                    <Flex p="3" pb='-1' direction="column" alignContent="center" justifyContent="center">
                                        <DeleteUserPreset setThemes={setUserThemes} userId={user.id}/>
                                    </Flex>
                                </Box> : <Box textAlign="center">
                                    <Text fontSize="16" fontWeight="medium">
                                        No themes saved! <br/>
                                        <b>Get started with saving themes!</b>
                                    </Text>
                                </Box>
                        }
                        
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <div style={{top: 0, position: "relative", padding: 10}}>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    {user === null ? <LoginButton 
                        setUser={setUser}
                        setUserThemes={setUserThemes}
                    /> : 
                        <Flex direction="column">
                            <Box
                                fontSize="10"
                                bg="blackAlpha.400"
                                p="5"
                                borderRadius="md"
                            >
                        Logged in as: <br/>
                                {user.profile.email}
                            </Box>
                            <Button colorScheme="red" onClick={()=>setUser(null)}>
                            Log out
                            </Button>
                        </Flex>} 
                    <Flex direction="column">
                        <RegisterUserButton setUser={setUser} setUserThemes={setUserThemes}
                        />
                        <Spacer/>
                        {user !== null && <PostUserTheme 
                            ThemeFile={themeFile}
                            setPresets={setUserThemes}
                            user={user.id as string}
                        />
                        }
                    </Flex>
                </Grid>
            </div>
        </div>
    );
}