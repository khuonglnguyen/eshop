import React from 'react'
import './Product.css'

function Product() {
  return (
    <div className="product">
        <div className="product__info">
            <p>Title</p>
            <p className="product__price">$30</p>
            <div className="product__rating">**</div>
        </div>
        <img src="https://m.media-amazon.com/images/I/71NBQ2a52CL._SX522_.jpg" alt="product-image" />
        <button>Add To Cart</button>
    </div>
  )
}

export default Product