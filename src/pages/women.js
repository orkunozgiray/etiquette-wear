import React, { useState } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { WomenData } from '../components/Women/Data';
import Navbar2 from '../components/Navbar2';
import Women from '../components/Women';
import Sidebar from '../components/Sidebar';

const WomenP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <Hero />
            <Women {...WomenData} />
            <Footer />
        </>
    );
}

export default WomenP;
