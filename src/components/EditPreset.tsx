import React from "react";
import { EditIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";

export default function EditPreset(){
    return(
        <Button h="100%" w="0" colorScheme="transparent">
            <EditIcon color="black"/>
        </Button>
    );
}