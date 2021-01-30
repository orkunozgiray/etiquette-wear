import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MagazineContainer = styled.div`
    color: #fff;
    background: #F2EFBF;

    @media screen and (max-width: 768px) {

    }
`;

export const MagazineWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 520px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 24px;
    justify-content: center;
`;

export const MagazineRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

    @media screen and (max-width: 768px) {
      
    }
`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

    @media screen and (max-width: 768px) {
      
    }
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;

    @media screen and (max-width: 768px) {
      
    }
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;

    @media screen and (max-width: 768px) {
      
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 768px) {
      
    }
`;

export const MagazineButton = styled(Link)`
    border-radius: 8px;
    background: ${({primary}) => (primary ? '#ffffff' : '#c3cad6')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 1.5px solid #d6d6d6;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    margin-right: 50px;

    &:hover {
        transition: all 0.3s ease-in-out;
        background: ${({primary}) => (primary ? '#c3cad6' : '#99adcf')};
        font-size: 20px;
    }
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

    @media screen and (max-width: 768px) {
      
    }
`;

export const Img = styled.img`
    width: 70%;
    margin: -30px 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 768px) {
        width: 50%;
    }
`;