import React from 'react';
import {
    Sizes
} from './DetailsElements';

const Sizes = ({sizes}) => {
    return (
            <Sizes>
                {
                    sizes.map((size, index) =>(
                        <button key={index}>{size}</button>
                    ))
                }
            </Sizes>
    );
}

export default Sizes;
