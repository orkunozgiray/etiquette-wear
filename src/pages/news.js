import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import News from '../components/News';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import fire from '../fire';
import Navbar21 from '../components/Navbar21';

const NewsP = () => {

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
            <News />
            <Footer />
        </>
    );
}

export default NewsP;
