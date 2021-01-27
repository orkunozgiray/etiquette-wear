import React from 'react';
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLinks,
    SideBtnWrap,
    SidebarRoute
 } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}>
                <Icon onClick={toggle}>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLinks to='/' onClick={toggle}>WOMEN</SidebarLinks>
                        <SidebarLinks to='/' onClick={toggle}>MEN</SidebarLinks>
                        <SidebarLinks to='/' onClick={toggle}>CREATE MY ETIQUETTE</SidebarLinks>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;
