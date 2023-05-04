import React from "react";
import {Box, Button, Flex, HStack, Popover, PopoverArrow, 
    PopoverBody, PopoverCloseButton, PopoverContent, 
    PopoverHeader, PopoverTrigger, Text, Spacer, 
    FormControl, FormHelperText, FormLabel, Input} from "@chakra-ui/react";
import download from "../functions/download";
import { DownloadIcon, InfoIcon } from "@chakra-ui/icons";
import jsTokens from "js-tokens";
import { DroppedPreset, ThemeFile } from "./Common";
import PresetLoader from "./PresetLoader";
import PreviewButtonsGroup from "./PreviewButtonsGroup";
import { useDrag, useDrop } from "react-dnd";
import { DroppedColor} from "./Common";


const previewCode: string = `import React from "react";
import logo from "./logo.svg";
import "./App.css";

// App generated using create-react-app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
`;

const jsReservedWords = [
    "from", // edge case! don't call variables from!!
    "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default",
    "delete", "do", "else", "export", "extends", "false", "finally", "for", "function",
    "if", "import", "in", "instanceof", "let", "new", "null", "return", "static", "super",
    "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield",
];

function processCodeToHTML(code: string, themeFile: ThemeFile): JSX.Element {
    /*
     * Theme properties for your convenience:
     * - accent
     * - bg
     * - fg
     * - ui
     * - string
     * - func
     * - operator
     * - comment
     * - error
     */
    const getTokenColor = (value: string, type: string, themeFile: ThemeFile) => {
        // Get the easy ones that are properly typed
        switch (type) {
        case "IdentifierName":
        case "JSXIdentifier":
            if (jsReservedWords.includes(value))
                return themeFile.accent;
            else
                return themeFile.func;
        case "PrivateIdentifier":
            if (value.length > 1 && jsReservedWords.includes(value.substring(1)))
                return themeFile.accent;
            else
                return themeFile.func;

        case "NumericLiteral":           // 42
        case "Punctuator":               // +
        case "JSXPunctuator":
            return themeFile.operator;

        case "JSXString":
        case "StringLiteral":            // "hi"
        case "NoSubstitutionTemplate":   // `hi`
        case "TemplateHead":             // `hi${
        case "TemplateMiddle":           // }middle${
        case "TemplateTail":             // }end`
        case "RegularExpressionLiteral": // /[/]\//
            return themeFile.string;

        case "SingleLineComment":        // //
        case "MultiLineComment":         // /**/
            return themeFile.comment;
        }

        // Manually determine type based on value
        return themeFile.fg;
    };

    return (
        <pre style={{backgroundColor: themeFile.bg, height: "100%", width: "100%"}}>
            {
                code.split("\n").map((line, lineNumber) =>
                    <code key={line}>
                        <span style={{color: themeFile.ui}}>
                            {
                                lineNumber < 10
                                    ? ` ${lineNumber} `
                                    : `${lineNumber} `
                            }
                        </span>
                        {
                            Array.from(jsTokens(line, { jsx: true })).map(token =>
                                <span key={token.value} style={{color: getTokenColor(token.value, token.type, themeFile)}}>
                                    {token.value}
                                </span>
                            )
                        }
                        {"\n"}
                    </code>
                )
            }
        </pre>
    );
}

interface PreviewProps {
    themeFile: ThemeFile;
    setThemeFile: (x: ThemeFile) => void;
}
export default function Preview({themeFile, setThemeFile}: PreviewProps): JSX.Element{
    const [collectedProps, dropRef] = useDrop(() => ({
        accept: "PRESET",
        drop: (item, monitor) =>{
            const dropped = item as DroppedPreset;
            setThemeFile(dropped.ThemeFile);
        }
    }));

    return(
        <Box ref={dropRef}>
            <b>Preview</b>
            <div style={{width: "100%", height: "90%"}}>
                {processCodeToHTML(previewCode, themeFile)}
            </div>
            <PreviewButtonsGroup themeFile={themeFile} setThemeFile={setThemeFile}/>
        </Box>
    );
}

function setFillColor(fillColor: string) {
    throw new Error("Function not implemented.");
}
