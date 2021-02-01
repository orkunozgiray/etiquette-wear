import React, { useState } from 'react';
import Navbar2 from '../components/Navbar2';
import Footer from '../components/Footer';
import Blog from '../components/Blog';
import Sidebar from '../components/Sidebar';

const BlogP = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar2 toggle={toggle}/>
            <Blog />    
            <Footer />
        </>
    );
}

export default BlogP;
