import React, { useState, useEffect } from 'react';
import Cart from '../components/Cart';
import Footer from '../components/Footer';
import Navbar2 from '../components/Navbar2';
import Navbar21 from '../components/Navbar21';
import Sidebar from '../components/Sidebar';
import fire from '../fire';
import DataProvider from '../components/MenProducts/DataProvider';
import Hero from '../components/Hero';

const ShoppingCartP = () => {

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
            <Cart />
            <Footer />
        </DataProvider>
    )
}

export default ShoppingCartP;
