import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import "./styles/main.css"


import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import ProjectPage from "./pages/ProjectPage";
import ScrollToTop from "./utils/ScrillToTop";


function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/contacts" element={<Contacts/>}/>
                    <Route path="/project/:id" element={<ProjectPage/>}/>
                </Routes>
                <Footer/>
            </Router>
        </div>
    );
}

export default App;
