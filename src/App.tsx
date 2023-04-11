import React from "react";
import Edit from "./pages/edit";
import Landing from "./pages/landing";
import Users from "./pages/users";
//Routing
import {Routes, Route} from "react-router-dom";
// 3. Pass the `theme` prop to the `ChakraProvider`
export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/users" element={<Users/>}></Route>
            <Route path="/edit" element={<Edit/>}></Route>
        </Routes>
    );
}