import React, { useState } from 'react';
import Footer from '../components/Footer';
import News from '../components/News';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';

const NewsP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <News />
            <Footer />
        </>
    );
}

export default NewsP;
