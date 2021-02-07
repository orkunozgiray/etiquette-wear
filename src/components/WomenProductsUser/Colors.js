import React from 'react';
import {
    DetailsColors
} from './DetailsElements';

const Colors = ({colors}) => {
    return (
        <DetailsColors>
            {
                colors.map((color, index) =>(
                    <button key={index} style={{background: color}}>{color}</button>
                ))
            }
        </DetailsColors>
    );
}

export default Colors;
