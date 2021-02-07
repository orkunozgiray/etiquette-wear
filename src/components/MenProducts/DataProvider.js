import React, {createContext, useState, useEffect} from 'react';
import discount1 from './images/discount1.jpg';
import discount2 from './images/discount2.jpg';
import discount3 from './images/discount3.jpg';
import discount4 from './images/discount4.jpg';
import hoodie1 from './images/hoodie1.jpg';
import hoodie2 from './images/hoodie2.jpg';
import hoodie3 from './images/hoodie3.jpg';
import hoodie4 from './images/hoodie4.jpg';

export const DataContext = createContext();

const DataProvider = (props) => {
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                hoodie1,
                hoodie2,
                hoodie3,
                hoodie4
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 101,
            "count": 1
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                discount1,
                discount2,
                discount3,
                discount4
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 102,
            "count": 1
        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                hoodie1,
                hoodie2,
                hoodie3,
                hoodie4
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 103,
            "count": 1
        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                hoodie1,
                hoodie2,
                hoodie3,
                hoodie4
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 104,
            "count": 1
        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                hoodie1,
                hoodie2,
                hoodie3,
                hoodie4
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 105,
            "count": 1
        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://www.abc.com/images/img1.jpg",
                "https://www.abc.com/images/img2.jpg",
                "https://www.abc.com/images/img3.jpg",
                "https://www.abc.com/images/img4.jpg"
                ],
            "description": "How to and tutorial videos of cool CSS effect, Web Design ideas,JavaScript libraries, Node.",
            "content": "Welcome to our channel Dev AT. Here you can learn web designing, UI/UX designing, html css tutorials, css animations and css effects, javascript and jquery tutorials and related so on.",
            "colors": ["red", "black", "teal"],
            "sizes": ["XL", "L", "M", "XM", "LX"],
            "price": 106,
            "count": 1
        }
    ]);

    const [cart, setCart] = useState([]);

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if(check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        }else{
            alert("The Product has been added to cart")
        }
    }

    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if(dataCart) setCart(dataCart)
    },[]);

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    },[cart])

const value = {
    products: [products, setProducts],
    cart: [cart, setCart],
    addCart: addCart
}

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataProvider;