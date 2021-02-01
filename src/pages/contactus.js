import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import ContactUs from '../components/ContactUs';
import Sidebar from '../components/Sidebar';

const ContactUsP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <ContactUs />
            <Footer />
        </>
    );
}

export default ContactUsP;
