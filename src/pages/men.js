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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    // const [hasAccount, setHasAccount] = useState(false);


    const clearInputs = () => {
        setEmail('');
        setPassword('');
    };

    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default :      
                }
            });
    };

    const handleSignup = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch((err) => {
                switch (err.code) {
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(err.message);
                        break;
                    case "auth/weak-password":
                        setPasswordError(err.message);
                        break; 
                    default:
                        console.log(`Please Sign in`);       
                }
            });
    };

    const handleLogout = () => {
        fire.auth().signOut();
    };

    const authListener = () => {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        });
    };

    useEffect(() => {
        authListener();
    }, );
    //Firebase E-Mail Login Auth

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <DataProvider>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            {user ? (
                <Navbar21 handleLogout={handleLogout} toggle={toggle}/>
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
