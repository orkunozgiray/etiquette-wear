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
                        <SidebarLinks to='/news' onClick={toggle}>WHAT'S NEW</SidebarLinks>
                        <SidebarLinks to='/sale' onClick={toggle}>SALE</SidebarLinks>
                        <SidebarLinks to='/women' onClick={toggle}>WOMEN</SidebarLinks>
                        <SidebarLinks to='/men' onClick={toggle}>MEN</SidebarLinks>
                        <SidebarLinks to='/blog' onClick={toggle}>MAGAZINE</SidebarLinks>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}

export default Sidebar;
