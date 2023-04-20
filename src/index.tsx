import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter } from "react-router-dom";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { ChakraProvider, extendTheme} from "@chakra-ui/react";
import { chakraTheme } from "./chakraTheme";
const theme = extendTheme(chakraTheme);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(    
    <>
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <DndProvider backend={HTML5Backend}>
                    <HashRouter>
                        <App />
                    </HashRouter>
                </DndProvider>
            </ChakraProvider>
        </React.StrictMode>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
