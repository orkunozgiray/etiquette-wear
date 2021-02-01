import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { WomenData } from '../components/Women/Data';
import Navbar from '../components/Navbar';
import Women from '../components/Women';

const WomenP = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Women {...WomenData} />
            <Footer />
        </>
    );
}

export default WomenP;
