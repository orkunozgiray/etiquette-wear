import React from 'react';
import {
    Thumb,
    ThumbImg
} from './DetailsElements';

const DetailsThumb = ({images, setIndex}) => {
    return (
        <div>
            <Thumb>
                {
                    images.map((img, index)=>(
                        <ThumbImg src={img} alt="" key={index} 
                        onClick={() => setIndex(index)} />
                    ))
                }
            </Thumb>
        </div>
    );
}

export default DetailsThumb;
