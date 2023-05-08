import React from "react";
import Edit from "./pages/edit";
import Landing from "./pages/landing";
//Routing
import {Routes, Route} from "react-router-dom";
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/edit" element={<Edit/>}></Route>
        </Routes>
    );
}