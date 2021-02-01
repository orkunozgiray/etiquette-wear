import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import SignUp from '../components/SignUp';
import Sidebar from '../components/Sidebar';

const SignUpP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <SignUp />
            <Footer />
        </>
    );
}

export default SignUpP;
