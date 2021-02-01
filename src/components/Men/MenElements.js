import styled from 'styled-components';

export const MenContainer = styled.div`
    color: #000;
    background: #CCD3E1;
`;

export const MenWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 2500px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const MenRow1 = styled.div`
    position: sticky;
    color: #000;
    background: red;
    height: 700px;
    width: 1240px;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'row1 row2' 'row1 row2'` : `'row1 row1' 'row2 row2'`)};
    margin: 150px 0 0 0;
    padding: 0 0 0 0;
`;

export const MenColumn1 = styled.div`
    position: relative;
    color: #000;
    background: blue;
    height: 650px;
    width: 600px;
    grid-area: row1;
    margin: 20px 0 50px 10px;
    padding: 0 0 0 0;
`;

export const MenColumn2 = styled.div`
    position: relative;
    color: #000;
    background: blue;
    height: 650px;
    width: 600px;
    grid-area: row2;
    margin: 20px -50px 50px 10px;
    padding: 0 0 0 0;
`;

export const MenRow21 = styled.div`
    position: sticky;
    color: #000;
    background: white;
    height: 310px;
    width: 580px;
    grid-area: row1;
    margin: 10px 0 0 10px;
    padding: 0 0 0 0;
`;

export const MenRow22 = styled.div`
    position: sticky;
    color: #000;
    background: white;
    height: 310px;
    width: 580px;
    grid-area: row2;
    margin: 10px 0 0 10px;
    padding: 0 0 0 0;
`;

export const MenRow2 = styled.div`
    position: sticky;
    color: #000;
    background: purple;
    height: 500px;
    width: 1240px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart}) => (imgStart ? `'row1 row1' 'row2 row2' 'row3 row3' 'row4 row4'` : `'row1 row1' 'row2 row2' 'row3 row3' 'row4 row4'`)};
    margin: -200px -50px 900px 0;
    padding: 0 0 0 0;
`;

export const MenColumn3 = styled.div`
    position: sticky;
    color: #000;
    background: blue;
    height: 200px;
    width: 400px;
    grid-area: row3;
    margin: 5px -50px 50px 200px;
    padding: 0 0 0 0;
`;

export const MenColumn4 = styled.div`
    position: sticky;
    color: #000;
    background: blue;
    height: 200px;
    width: 400px;
    grid-area: row4;
    margin: 5px -50px 50px 200px;
    padding: 0 0 0 0;
`;