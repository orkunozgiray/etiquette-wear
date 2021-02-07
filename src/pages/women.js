import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar2 from '../components/Navbar2';
import Sidebar from '../components/Sidebar';
import fire from '../fire';
import Navbar21 from '../components/Navbar21';
import WomenProducts from '../components/WomenProducts';
import WomenProductsUser from '../components/WomenProductsUser';
import DataProvider from '../components/MenProducts/DataProvider';

const WomenP = () => {

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
        <DataProvider>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {user ? (
                <Navbar21 toggle={toggle}/>
            ) : (
                <Navbar2 toggle={toggle}/>
            )}              
            <Hero />
            {user ? (
                <WomenProducts toggle={toggle}/>
            ) : (
                <WomenProductsUser toggle={toggle}/>
            )}
            <Footer />
        </DataProvider>
    );
}

export default WomenP;
