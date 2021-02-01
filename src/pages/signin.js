import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Sidebar from '../components/Sidebar';

const SignInP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <SignIn />
            <Footer />
        </>
    );
}

export default SignInP;
