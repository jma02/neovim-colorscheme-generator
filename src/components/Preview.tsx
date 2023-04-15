import React from "react";
import {Image, Button} from "@chakra-ui/react";
import download from "../functions/download";
import { DownloadIcon } from "@chakra-ui/icons";
import { ThemeFile } from "./Common";

interface PreviewProps {
    themeFile: ThemeFile;
}
export default function Preview({themeFile}: PreviewProps): JSX.Element{
    return(
        <div>
            <b>Preview</b>
            <Image boxSize="lg" src="https://via.placeholder.com/500x300/0077be/ffffff?text=Placeholder+Image"></Image>
            <Button       
                leftIcon={<DownloadIcon />}
                colorScheme="blue" onClick={()=> download(themeFile)}>
                    Download .lua File
            </Button>
        </div>
    );
}