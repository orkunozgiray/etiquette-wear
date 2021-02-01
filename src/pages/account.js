import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';

const AccountP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <Footer />
        </>
    );
}

export default AccountP;
