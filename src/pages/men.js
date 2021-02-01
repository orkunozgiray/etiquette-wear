import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { MenData } from '../components/Men/Data';
import Men from '../components/Men/Index';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const MenP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero />
            <Men {...MenData}/>
            <Footer />
        </>
    );
}

export default MenP;
