import styled from 'styled-components';

export const WomenDetails = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 50px;
`;

export const WomenImgContainer = styled.div`
    max-width: 400px;
    width: 100%;
    margin: 20px;
    height: 450px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    &:hover {
        background-size: 150%;
        border: 1px solid #ddd;
        cursor: zoom-in;
    }
`;

export const WomenBoxDetails = styled.div`
    max-width: 500px;
    width: 100%;
    margin: 20px;
`;

export const WomenBoxDetailsH1 = styled.h1`
    text-transform: uppercase;
    color: darkblue;
    letter-spacing: 2px;
    font-size: 2rem;
`;

export const WomenBoxDetailsH2 = styled.h2`
    
`;

export const WomenBoxDetailsP = styled.p`
    line-height: 1.5;
    margin: 10px 0;
    opacity: 0.8;
`;

export const DetailsColors = styled.div`

`;

export const Thumb = styled.div`
    display: flex;
    cursor: pointer;
`;

export const ThumbImg = styled.div`
    width: 50px;
    margin: 20px;
    overflow: hidden;
`;

export const Sizes = styled.div`

`;