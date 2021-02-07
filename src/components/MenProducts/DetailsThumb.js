import React from 'react';

const DetailsThumb = ({images, setIndex}) => {
    return (
        <div>
            <div className="thumb">
                {
                    images.map((img, index)=>(
                        <img src={img} alt="" key={index} 
                        onClick={() => setIndex(index)} />
                    ))
                }
            </div>
        </div>
    );
}

export default DetailsThumb;
