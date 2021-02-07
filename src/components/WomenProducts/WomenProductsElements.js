import styled from 'styled-components';

export const Products = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px 0;
`;

export const ProductsImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 340px;
    display: block;
    object-fit: cover;
`;

export const ProductsCard = styled.div`
    max-width: 380px;
    width: 100%;
    overflow: hidden;
    height: 570px;
    box-shadow: 0 0 5px #ccc;
    padding: 15px;
    margin: 15px 0;
    cursor: pointer;
`;

export const ProductsBox = styled.div`
    margin: 15px 0;
`;

export const ProductsH = styled.h1`
    text-transform: uppercase;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

export const ProductsP = styled.p`
    margin: 10px 0;
    line-height: 1.5;
`;

export const ProductsH2 = styled.h2`
    color: crimson;
`;