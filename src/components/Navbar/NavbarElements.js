import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : 'black')};
    height: 80px;
    margin-top: -10px;
    margin-left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavLogo = styled(LinkR)`
    color:  #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 2.5rem;
    letter-spacing: 10px;
    display: flex;
    align-items: center;
    margin-left: -40px;
    font-weight: bold;
    text-decoration: none;
    transition: all 0.5s ease-in-out;

    &:hover {
        transition: all 0.5s ease-in-out;
        letter-spacing: 15px;
    }

    @media screen and (max-width: 960px) {
        margin-left: 20px;
    }
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -10px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 22px;
    letter-spacing: 4px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    &.active {
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        transition: all 0.4s ease-in-out;
        font-size: 28px;
        letter-spacing: 4px;
        color: #fff;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 18px;
    background: #fff;
    white-space: nowrap;
    margin: 10px -50px 0 30px;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: 1.5px solid #ccd5f0;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.4s ease-in-out;
        background: #d0e2f2;
        color: #010606;
        letter-spacing: 1.5px;
    }
`;