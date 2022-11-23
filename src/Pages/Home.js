import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home(){
    return (
        <div>
            <Navbar/>
            <About/>
            <Footer/>
        </div>
    )
}