import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const AnnContainer = styled.div`
    color: #fff;
    background: #E2E2E2;

    @media screen and (max-width: 768px) {

    }
`;

export const AnnWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 400px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 20px 24px;
    justify-content: center;
`;

export const AnnColumn = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col1' 'col2 col2'` : `'col1 col1' 'col2 col2'`)};
    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Row1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`;

export const Row2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const AnnH1 = styled.h1`
    position: absolute;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};
    margin: -30px 20px 10px 70px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const ButtonWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const AnnButton = styled(Link)`
    border-radius: 20px;
    background: ${({primary}) => (primary ? '#ba7d8a' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '22px' : '16px')};
    outline: none;
    border: 1.5px solid #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center; 
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin: 40px 10px -40px 90px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#d6c3c7' : '#afd1db')};
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
    }
`;

export const Slider = styled.div`
    position: relative;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LeftArrow = styled.div`
    position: absolute;
    top: 50%;
    left: -120px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

export const RightArrow = styled.div`
    position: absolute;
    top: 50%;
    right: -120px;
    font-size: 3rem;
    color: #000;
    z-index: 10;
    cursor: pointer;
    user-select: none;
`;

