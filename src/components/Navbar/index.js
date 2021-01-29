import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav, 
    NavContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavSearch 
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop()
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to='/etiquette-wear' onClick={toggleHome}>ETIQUETTE</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                                to='sale'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                spy={true}
                                offset={-80}
                            >
                                SALE
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='women'
                                smooth='true'
                                duration={1200} 
                                exact='true'
                                spy={true}
                                offset={-80}
                            >
                                WOMEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='men'
                                smooth='true'
                                spy={true}
                                duration={1200} 
                                exact='true' 
                                offset={-80}
                            >
                                MEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                                to='magazine'
                                smooth='true'
                                duration={1200} 
                                exact='true'
                                spy={true} 
                                offset={-80}
                            >
                                MAGAZINE
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                            to='/'
                            smooth='true'
                            duration={1200} 
                            exact='true' 
                            offset={-80}
                        >
                            Sign In
                        </NavBtnLink>
                        <NavBtnLink
                            to='/'
                            smooth='true'
                            duration={1200} 
                            exact='true' 
                            offset={-80}
                        >
                            My Bag
                        </NavBtnLink>
                        <NavSearch>
                            <FaSearch />
                        </NavSearch>
                    </NavBtn>
                </NavContainer>
            </Nav>  
        </>
    );
}

export default Navbar;
