import React from 'react'
import './Home.css';
import banner from './AmazonBanner.jpg'
import Product from './Product';

function Home() {
  return (
    <div className='home' >
        <div className="home__container">
            <img src={banner} alt="Prime Day Banner" className='home__image' />

            <div className="home__row">
                <Product id='1' title='The Lean Startup' price={1599} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81-QB7nDh4L.jpg" rating={4} />
                <Product id='1' title='Rich Dad Poor Dad' price={499} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51Hfv2MfNGL._SX331_BO1,204,203,200_.jpg" rating={4} />
            </div>
            <div className="home__row">
                <Product id='3' title='Apple Iphone 14 Pro' price={122999} image="https://s13emagst.akamaized.net/products/48592/48591224/images/res_c5366b309c505a8dc1361685a1c2ed9d.jpg" rating={5} />
                <Product id='4' title='Samsung Galaxy S23 Ultra' price={125999} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61VfL-aiToL._SX679_.jpg" rating={5} />
                <Product id='5' title='Google Pixel 7 Pro' price={79999} image="https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-pro-2.jpg" rating={5} />
            
            </div>
            <div className="home__row">
                <Product id='6' title='ASUS VivoBook 15' price={25990} image="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71S8U9VzLTL._SY450_.jpg" rating={5} />
            </div>
        </div>

    </div>
  )
}

export default Home
