import React, { useState } from "react";
import Edit from "./pages/edit";
import Landing from "./pages/landing";
//Routing
import {Routes, Route} from "react-router-dom";
export default function App() {
    const [user, setUser] = useState<Realm.User | null>(null);
    return (
        <Routes>
            <Route path="/" element={<Landing user={user} setUser={setUser}/>}></Route>
            <Route path="/edit" element={<Edit user={user} setUser={setUser}/>}></Route>
        </Routes>
    );
}