import React, { useState } from 'react';
import Footer from '../components/Footer';
import { MagazineData } from '../components/Magazine/Data';
import { DiscountData } from '../components/Discount/Data';
import { InfoOne } from '../components/Info/Data';
import { InfoTwo } from '../components/Info/Data';
import Info from '../components/Info';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Magazine from '../components/Magazine';
import Discount from '../components/Discount';
import { SliderData } from '../components/Discount/SliderData';
import './Slider.css';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Navbar toggle={toggle}/>
          <Hero />
          <Discount slides={SliderData} {...DiscountData} />
          <Info {...InfoOne} />
          <Info {...InfoTwo} />
          <Magazine {...MagazineData} />
          <Footer />
        </>
    );
}

export default Home;
