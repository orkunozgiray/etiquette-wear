import React, {useContext, useState, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {DataContext} from '../MenProducts/DataProvider';
import Colors from './Colors';
import Sizes from './Sizes';
import DetailsThumb from './DetailsThumb';
import {
    WomenDetails,
    WomenImgContainer,
    WomenBoxDetails,
    WomenBoxDetailsH1,
    WomenBoxDetailsH2,
    WomenBoxDetailsP
} from './DetailsElements';

const WomenDetails = () => {

    const {id} = useParams();
    const [products] = useContext(DataContext);
    const [index, setIndex] = useState(0);
    const imgDiv = useRef();
    // console.log(useParams())

    const details = products.filter((product, index) =>{
        return product._id === id
    })

    const handleMouseMove = e =>{
        const {left, top, width, height} = e.target.getBoundingClientRect();
        const x = (e.pageX - left) / width * 100;
        const y = (e.pageY - top) / height * 100;
        imgDiv.current.style.backgroundPosition = `${x}% ${y}%`
    }

    // console.log(details)

    return (
        <>
            {
                details.map(product =>(
                    <WomenDetails key={product._id}>
                        <WomenImgContainer 
                            onMouseMove={handleMouseMove}
                            style={{backgroundImage: `url(${product.images[index]})`}} ref={imgDiv} 
                            onMouseLeave={() => imgDiv.current.style.backgroundPosition = `center`} 
                        />
                        <WomenBoxDetails>
                            <WomenBoxDetailsH1 title={product.title}>{product.title}</WomenBoxDetailsH1>
                            <WomenBoxDetailsH2>${product.price}</WomenBoxDetailsH2>
                            <Colors colors={product.colors} />
                            <Sizes sizes={product.sizes} />
                            <WomenBoxDetailsP>{product.descrption}</WomenBoxDetailsP>
                            <WomenBoxDetailsP>{product.content}</WomenBoxDetailsP>
                            <DetailsThumb images={product.images} setIndex={setIndex}/>   
                            <button className="cart">Add to cart</button>
                        </WomenBoxDetails>
                    </WomenDetails>
                ))
            }
        </>
    );
}

export default WomenDetails;
