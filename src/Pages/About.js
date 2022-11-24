import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import History from '../components/History'
import Board from '../components/Board'
import Logo from '../components/Logo'

export default function About(){
    return(
        <div>
            <Navbar/>
            <History/>
            <Board/>
            <Logo/>
            <Footer/>
        </div>
    )
}