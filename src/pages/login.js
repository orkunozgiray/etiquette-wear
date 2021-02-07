import React, { useState, useEffect } from 'react';
import Navbar2 from '../components/Navbar2';
import Navbar21 from '../components/Navbar21';
import Footer from '../components/Footer';
import SignIn from '../components/SignIn';
import Logout from '../components/Logout'
import Sidebar from '../components/Sidebar';
import fire from '../fire';
import DataProvider from '../components/MenProducts/DataProvider';

const LoginP = () => {

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

    //Firebase Google Auth

    //Firebase Google Auth

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
            {user ? (
                <Logout handleLogout={handleLogout} /> 
            ) : (
                <SignIn 
                    email={email} 
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    emailError={emailError}
                    passwordError={passwordError}
                />
            )}    
            <Footer />
        </DataProvider>
    );
};

export default LoginP;
