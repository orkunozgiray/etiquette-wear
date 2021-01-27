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

const Sidebar = () => {
    return (
        <>
            <SidebarContainer>
                <Icon>
                    <CloseIcon />
                </Icon>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLinks to='WOMEN'></SidebarLinks>
                        <SidebarLinks to='MEN'></SidebarLinks>
                        <SidebarLinks to='CREATE MY ETIQUETTE'></SidebarLinks>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>Sign In</SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
};

export default Sidebar;
