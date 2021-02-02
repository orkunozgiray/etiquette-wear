import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import { MenData } from '../components/Men/Data';
import Men from '../components/Men/Index';
import Navbar2 from '../components/Navbar2';
import Navbar21 from '../components/Navbar21';
import Sidebar from '../components/Sidebar';
import fire from '../fire';


const MenP = () => {

    //Firebase E-Mail Login Auth
    const [user, setUser] = useState("");

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, []);
    //Firebase E-Mail Login Auth

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {user ? (
                <Navbar21 toggle={toggle}/>
            ) : (
                <Navbar2 toggle={toggle}/>
            )}            
            <Hero />
            <Men {...MenData}/>
            <Footer />
        </>
    );
}

export default MenP;
