import React from "react";
import {Image, Button} from "@chakra-ui/react";
export default function Preview(): JSX.Element{
    return(
        <div>
            <b>Preview</b>
            <Image boxSize="lg" src="https://via.placeholder.com/500x300/0077be/ffffff?text=Placeholder+Image"></Image>
            <Button colorScheme="blue">Download .lua File</Button>
        </div>
    );
}