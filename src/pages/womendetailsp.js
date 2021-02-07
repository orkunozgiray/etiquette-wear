import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Navbar21 from '../components/Navbar21';
import Navbar2 from '../components/Navbar2';
import Hero from '../components/Hero';
import { WomenDetails } from '../components/WomenProducts/Details/DetailsElements';
import fire from '../fire';
import DataProvider from '../components/MenProducts/DataProvider';

const WomenDetailsP = () => {

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
            <WomenDetails />
            <Footer />
        </DataProvider>
    );
}

export default WomenDetailsP;
