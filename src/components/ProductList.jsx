import axios from 'axios';
import React from 'react'
import { Link } from 'react-router-dom';

const ProductList = props => {
    
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/product/' + productId)
            .then(res => {
                props.removeFromDom(productId)
            })
    }

    return (
        <div className='content'>
            <h2>Products</h2>
            {props.products.map((item, index)=> 
                <div>
                    <p key={index}>Title: {item.title}, Price: {item.price}, Description: {item.description}</p>
                    <Link to={`/${item._id}`}>Details</Link>
                    <button onClick={(e)=>{deleteProduct(item._id)}}>Delete</button>
                </div>
            )}
        </div>
    )
}

export default ProductList;