import React from 'react';
import { FaBars } from 'react-icons/fa';
import {
    Nav, 
    NavContainer, 
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink 
} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/'></NavLogo>
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks
                            
                            >
                                WOMEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            
                            >
                                MEN
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            
                            >
                                CREATE MY ETIQUETTE
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks
                            
                            >
                                LANGUAGE
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink
                        
                        >
                            Sign In
                        </NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>  
        </>
    );
};

export default Navbar;
