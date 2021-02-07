import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import MenProducts from '../components/MenProducts';
import Details from '../components/MenProducts/Details';
import DetailsUser from '../components/MenProductsUser/DetailsUser';
import Navbar2 from '../components/Navbar2';
import Navbar21 from '../components/Navbar21';
import Sidebar from '../components/Sidebar';
import fire from '../fire';
import DataProvider from '../components/MenProducts/DataProvider';
import MenProductsUser from '../components/MenProductsUser';

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
        <DataProvider>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {user ? (
                <Navbar21 toggle={toggle}/>
            ) : (
                <Navbar2 toggle={toggle}/>
            )}            
            <Hero />
            {user ? (
                <Details toggle={toggle}/>
            ) : (
                <DetailsUser toggle={toggle}/>
            )}
            {user ? (
                <MenProducts toggle={toggle}/>
            ) : (
                <MenProductsUser toggle={toggle}/>
            )}                
            <Footer />
        </DataProvider>
    );
}

export default MenP;
