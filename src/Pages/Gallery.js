import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Loading from "../components/Loading";

export default function GalleryPage(){
    const [isLoading,setIsLoading] = React.useState(false)
    return(
        <div>
            {/* {isLoading ? <Loading/> : <div>
                <Navbar/>
                <Gallery setIsLoading={setIsLoading}/>
                <Footer/>    
            </div>} */}
            <Navbar/>
            <Gallery/>
            <Footer/> 
            
        </div>
    )
}