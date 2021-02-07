import React from 'react';

const Sizes = ({sizes}) => {
    return (
        <div>
            <div className="sizes">
                {
                    sizes.map((size, index) =>(
                        <button key={index}>{size}</button>
                    ))
                }
            </div>
        </div>
    );
}

export default Sizes;
