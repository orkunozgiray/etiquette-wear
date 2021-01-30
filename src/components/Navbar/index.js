import React, { useState, useEffect } from 'react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import SignInModal from './SignInModal';
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
    NavSearch,
    ButtonModal,
    ModalContainer
} from './NavbarElements';

const Navbar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const [showModal, setShowModal] = useState(false);


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


    const openModal = () => {
        setShowModal(prev => !prev);
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
                        <ModalContainer>
                            <ButtonModal
                                onClick={openModal}
                                to='/'
                                smooth='true'
                                duration={1200} 
                                exact='true' 
                                offset={-80}
                            >
                                Sign In
                            </ButtonModal>
                            <SignInModal showModal={showModal} setShowModal={setShowModal} />
                            {/* <GlobalStyle /> */}
                        </ModalContainer>

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
