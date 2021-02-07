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
                    <Navbar12 toggle={toggle}/>
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
