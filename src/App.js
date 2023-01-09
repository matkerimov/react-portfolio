import React from "react";


import "./styles/main.css"

import sun from "./img/icons/sun.svg"
import moon from "./img/icons/moon.svg"
import vk from "./img/icons/vk.svg"
import instagram from "./img/icons/instagram.svg"
import twitter from "./img/icons/twitter.svg"
import github from "./img/icons/gitHub.svg"
import linkedIn from "./img/icons/linkedIn.svg"

import NavBar from "./components/navbar/NavBar";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";


function App() {
    return (
        <div className="App">

            <NavBar/>

            {/*<Home/>*/}
            <Projects/>
            {/*<Contacts/>*/}
            <Footer/>

        </div>
    );
}

export default App;
