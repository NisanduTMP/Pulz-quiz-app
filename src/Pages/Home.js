import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";
import PrincipalMessage from "../components/PrincipalMessage";
import TicMessage from "../components/TicMessage";
import MiniGallery from "../components/MiniGallery";
import AlumniMini from "../components/AlumniMini";
import Banner from "../components/Banner";

export default function Home(){
    return (
        <div>
            <Navbar/>
            <Banner
                title="Wanna like to see details about ACVAS"
                link="/about"
                buttonText="About Us"
                isHome={true}
            />
            <About/>
            <PrincipalMessage/>
            <TicMessage/>
            <AlumniMini/>
            <MiniGallery/>
            <Footer/>
        </div>
    )
}