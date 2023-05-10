import React from "react";
import { AccordionButton, AccordionIcon, Box } from "@chakra-ui/react";
import { useDragLayer, useDrop } from "react-dnd";
import { DroppedPreset, PostFragment, Preset } from "./Common";
import post_user_preset from "../functions/post_user_preset";
import fetch_user_presets from "../functions/fetch_user_presets";

interface CentralToUserProps {
    user: Realm.User | null;
    setUserThemes: (x: Preset[]) => void;
    
}
export default function CentralToUser({user, setUserThemes}: CentralToUserProps) {
    const { isDragging, type } = useDragLayer((monitor) => ({
        isDragging: monitor.isDragging(),
        type: monitor.getItemType(),
    }));

    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "PRESET",
        canDrop: (item, monitor)=>{
            return user !== null;
        },
        drop: (item, monitor) =>{
            const dropped = item as DroppedPreset;
            const postFrag: PostFragment = {
                ThemeFile: dropped.ThemeFile,
                // kept optional for sanity sake
                name: dropped.name,
                description: dropped.description,
                upvotes: dropped.upvotes,
            };
            // eslint-disable-next-line no-extra-parens
            post_user_preset(postFrag, (user as Realm.User).id)
                .then((success)=>{
                    // eslint-disable-next-line no-extra-parens
                    fetch_user_presets((user as Realm.User).id, setUserThemes);
                }
                );
        }
    }));
    return (
        <h2>
            <AccordionButton
                borderStyle="solid"
                borderWidth="1px"
                borderRadius="lg"
                borderColor={isDragging && user !== null && type === "PRESET" ? "white" : "transparent"}
                boxShadow={isDragging && user !== null && type === "PRESET" ? "0 0 10px 5px rgba(255, 255, 255, 0.5)" : "none"}
                _hover={{ textShadow: "0px 0px 1px #ccc" }}
            >
                <Box 
                    as="span" 
                    flex='1' 
                    textAlign='left'
                    ref={dropRef}
                >
        Saved Themes
                </Box> 
                <AccordionIcon />
            </AccordionButton>
        </h2>
        
    );
}