import React, { useState, useEffect, useContext } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { DataContext } from '../MenProducts/DataProvider';
import { BsBagFill } from 'react-icons/bs';
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
    NavBtnLogout,
    NavSearch,
    ButtonModal,
    ModalContainer,
    MyBag
} from './NavbarElements';

const Navbar12 = ({ toggle, handleLogout }) => {

    const value = useContext(DataContext);
    const [cart] = value.cart;

    const [scrollNav, setScrollNav] = useState(false);
    // const [setShowModal] = useState(false);


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


    // const openModal = () => {
    //     setShowModal(prev => !prev);
    // };

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
                                to='news'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                spy={true}
                                offset={-80}
                            >
                                WHAT'S NEW
                            </NavLinks>
                        </NavItem>
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
                        <ModalContainer>
                            <ButtonModal
                                to='/account'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                offset={-80}
                            >
                                My Profile
                            </ButtonModal>
                            {/* <GlobalStyle /> */}
                        </ModalContainer>
                        
                        <NavBtnLink
                            to='shoppingcart'
                            smooth='true'
                            duration={1200} 
                            exact='true' 
                            offset={-80}
                        >
                            <span>{cart.length}</span>
                            <MyBag>
                                <BsBagFill />
                            </MyBag>
                        </NavBtnLink>
                        <NavBtnLogout
                            onClick={handleLogout}
                            smooth='true'
                            duration={1200} 
                            exact='true' 
                            offset={-80}
                        >
                            SignOut
                        </NavBtnLogout>
                        <NavSearch>
                            <FaSearch />
                        </NavSearch>
                    </NavBtn>
                </NavContainer>
            </Nav>  
        </>
    );
}

export default Navbar12;
