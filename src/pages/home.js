import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { MagazineData } from '../components/Magazine/Data';
import { DiscountData } from '../components/Discount/Data';
import { AnnData } from '../components/Announcement/Data';
import { InfoOne } from '../components/Info/Data';
import { InfoTwo } from '../components/Info/Data';
import Info from '../components/Info';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Magazine from '../components/Magazine';
import Discount from '../components/Discount';
import { SliderData } from '../components/Discount/SliderData';
import { AnnSliderData } from '../components/Announcement/AnnSliderData';
import './Slider.css';
import './Slider2.css';
import Announcement from '../components/Announcement';
import fire from '../fire';
import Navbar12 from '../components/Navbar12';
import DataProvider from '../components/MenProducts/DataProvider';

const HomeP = () => {

    //Firebase E-Mail Login Auth
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [hasAccount, setHasAccount] = useState(false);

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
                    <Navbar12 handleLogout={handleLogout} toggle={toggle}/>
                ) : (
                    <Navbar toggle={toggle}/>
                )}            
            <Hero />
            <Announcement slides={AnnSliderData} {...AnnData} />
            <Discount slides={SliderData} {...DiscountData} />
            <Info {...InfoOne} />
            <Info {...InfoTwo} />
            <Magazine {...MagazineData} />
            <Footer />
        </DataProvider>
    );
}

export default HomeP;
