import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import PrincipalMessage from "../components/PrincipalMessage";
import TicMessage from "../components/TicMessage";
import MiniGallery from "../components/MiniGallery";
import AlumniMini from "../components/AlumniMini";

export default function Home(){
    return (
        <div>
            <Navbar/>
            <About/>
            <PrincipalMessage/>
            <TicMessage/>
            <AlumniMini/>
            <MiniGallery/>
            <Footer/>
        </div>
    )
}