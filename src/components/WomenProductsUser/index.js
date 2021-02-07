import React, {useContext} from 'react';
import {DataContext} from '../MenProducts/DataProvider';
import {Link} from 'react-router-dom';
import './index.css';
import {
    Products,
    ProductsCard,
    ProductsImg,
    ProductsBox,
    ProductsH,
    ProductsP,
    ProductsH2
} from './WomenProductsElements';

const WomenProductsUser = () => {

    const value = useContext(DataContext);
    const [products] = value.products;

    return (
        <Products>
            {
                products.map(product =>(
                    <ProductsCard key={product._id}>
                        <Link to={`/products/${product._id}`}>
                            <ProductsImg src={product.images[0]} alt="" />
                        </Link>
                        <ProductsBox>   
                            <ProductsH title={product.title}>
                                <Link to={`/products/${product._id}`}>{product.title}</Link>
                            </ProductsH>
                            <ProductsP>{product.description}</ProductsP>
                            <ProductsH2>${product.price}</ProductsH2> 
                            <Link to='login'>
                                    Add to cart
                            </Link>
                        </ProductsBox>    
                    </ProductsCard>
                ))
            }
        </Products>
    );
}

export default WomenProductsUser;
