import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaTwitter, 
    FaLinkedin 
} from 'react-icons/fa';
import { 
    FooterContainer,
    FooterWrapper,
    FooterLinkContainer,
    FooterLinkWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
 } from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop()
    };
    
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLinkContainer>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contacts Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                        <FooterLinkWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                                <FooterLink to='/'>About Us</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                                <FooterLink to='/'>Contacts Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                                <FooterLink to='/'>Contact Us</FooterLink>
                            </FooterLinkItems>
                        </FooterLinkWrapper>
                    </FooterLinkContainer>
                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/etiquette-wear' onClick={toggleHome}>ETIQUETTE</SocialLogo>
                            <WebsiteRights>ETIQUETTE © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                            <SocialIcons>
                            <SocialIconLink href={'//www.facebook.com/'} target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.instagram.com/'} target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.youtube.com/watch?v=rwg9yTi4np8'} target='_blank' aria-label='Youtube' rel="noopener noreferer">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href={'//twitter.com/?lang=en'} target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href={'//www.linkedin.com/'} target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrapper>
            </FooterContainer>
        </>
    );
}

export default Footer;
