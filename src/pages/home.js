import React, { useState } from 'react';
import Footer from '../components/Footer';
import { MagazineData } from '../components/Magazine/Data';
import { InfoOne } from '../components/Info/Data';
import { InfoTwo } from '../components/Info/Data';
import Info from '../components/Info';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Magazine from '../components/Magazine';

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
          <Info {...InfoOne} />
          <Info {...InfoTwo} />
          <Magazine {...MagazineData} />
          <Footer />
        </>
    );
}

export default Home;