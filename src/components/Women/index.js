import React from 'react';
import {
    WomenContainer,
    WomenWrapper,
    WomenRow1,
    WomenRow2,
    WomenRow21,
    WomenRow22,
    WomenColumn1,
    WomenColumn2,
    WomenColumn3,
    WomenColumn4
} from './WomenElements';

const Women = ({ id, imgStart }) => {
    return (
        <>
            <WomenContainer id={id}>
                <WomenWrapper>
                    <WomenRow1 imgStart={imgStart}>
                        <WomenColumn1>
                            
                        </WomenColumn1>
                        <WomenColumn2>
                            <WomenRow21>
                                
                            </WomenRow21>
                            <WomenRow22>
                                
                            </WomenRow22>
                        </WomenColumn2>
                    </WomenRow1>
                    <WomenRow2 imgStart={imgStart}>
                        <WomenColumn3>
                            
                        </WomenColumn3>
                        <WomenColumn4>
                             
                        </WomenColumn4>
                    </WomenRow2>
                </WomenWrapper>
            </WomenContainer>
        </>
    );
}

export default Women;
