import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img alt="" src="https://www.lyngblomsten.org/files/6615/9846/5287/Homepage_banner-01.jpg" className="home__image"/>
                <div className="home__row">
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home__row">
                    <Product></Product>
                    <Product></Product>
                    <Product></Product>
                </div>
                <div className="home__row">
                    <Product></Product>
                </div>
            </div>
        </div>
    )
}

export default Home