import React from 'react';
import {
    MenContainer,
    MenWrapper,
    MenRow1,
    MenRow2,
    MenRow21,
    MenRow22,
    MenColumn1,
    MenColumn2,
    MenColumn3,
    MenColumn4
} from './MenElements';

const Men = ({ id, imgStart }) => {
    return (
        <>
            <MenContainer id={id}>
                <MenWrapper>
                    <MenRow1 imgStart={imgStart}>
                        <MenColumn1>
                            
                        </MenColumn1>
                        <MenColumn2>
                            <MenRow21>
                                
                            </MenRow21>
                            <MenRow22>
                                
                            </MenRow22>
                        </MenColumn2>
                    </MenRow1>
                    <MenRow2 imgStart={imgStart}>
                        <MenColumn3>
                            
                        </MenColumn3>
                        <MenColumn4>
                             
                        </MenColumn4>
                    </MenRow2>
                </MenWrapper>
            </MenContainer>
        </>
    );
}

export default Men;
